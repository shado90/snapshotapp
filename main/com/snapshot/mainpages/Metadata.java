package com.snapshot.mainpages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;
import org.bson.types.ObjectId;

import com.snapshot.dao.MetadataDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.MetadataDocument;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;

/**
 * Servlet implementation class Metadata
 */
@WebServlet("/Metadata")
public class Metadata extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Metadata() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub	
		
		request.setAttribute("getallmetadata", new NewBuildRequestDocument().getAllRequestsForQE(
	    			((UserDAO) request.getSession().getAttribute("user")).getAccountname()));

	    request.getRequestDispatcher("/metadata.jsp").include(request, response);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		
		String action = request.getParameter("action");
		String id = request.getParameter("id");
		
		if(action.contentEquals("register")) {
			new MetadataDocument(geMetadataDAOfromRequest(request));
		} else if(action.contentEquals("edit")) {
			new MetadataDocument().update(geMetadataDAOfromRequest(request), id);;
		} else if(action.contentEquals("delete")) {
			new MetadataDocument().delete(id);;
		}
		
	}
	
	public MetadataDAO geMetadataDAOfromRequest(HttpServletRequest request) {
		MetadataDAO metadata = new MetadataDAO();
        try {
			BeanUtils.populate(metadata, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
        
        return metadata;
	}

}
