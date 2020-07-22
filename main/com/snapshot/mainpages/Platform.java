package com.snapshot.mainpages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.beanutils.BeanUtils;
import org.bson.types.ObjectId;

import com.google.gson.Gson;
import com.snapshot.dao.PlatformDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.PlatformDocument;

/**
 * Servlet implementation class Platform
 */
@WebServlet("/Platform")
public class Platform extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Platform() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub		
		String platform_id = request.getParameter("platform_id");	
		String action = request.getParameter("action");
		
		if(action!=null && action.contentEquals("getPlatform")){
			response.setContentType("application/json");
    		response.getWriter().write(new Gson().toJson(new PlatformDocument().getPlatform(platform_id)));
        } else if(action.contentEquals("delete")){
          	new PlatformDocument().delete(platform_id);
        }
    	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=UTF-8");
		HttpSession session=request.getSession(false); 
		
		String action = request.getParameter("action");
		
		if(action.contentEquals("register")) {
			String account_name = ((UserDAO) session.getAttribute("user")).getAccountname();
			new PlatformDocument(getPlatformDAOfromRequest(request), account_name);
		} else if (action.contentEquals("update")) {
			PlatformDAO platform = getPlatformDAOfromRequest(request);
			platform.setPlatform_id(request.getParameter("platform_id"));
			new PlatformDocument().update(platform);
		}
	
		request.getRequestDispatcher("/Home").include(request, response);
		
	}

	public PlatformDAO getPlatformDAOfromRequest(HttpServletRequest request) {
		PlatformDAO platform = new PlatformDAO();
        try {
			BeanUtils.populate(platform, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}        
        return platform;
	}
}
