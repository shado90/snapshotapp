package com.snapshot.mainpages;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.snapshot.dao.QERequestComments;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;
import com.snapshot.mongoconnection.Document.UserDocument;

/**
 * Servlet implementation class QEAdmin
 */
@WebServlet("/QEAdminHome")
@MultipartConfig
public class QEAdminHome extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QEAdminHome() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	    request.setAttribute("allQERequests", new NewBuildRequestDocument().getAllRequestsForQE(
	    			((UserDAO) request.getSession(false).getAttribute("user")).getName()));
	    request.setAttribute("qeNames", new UserDocument().getUsersByRole("qe"));

	    request.getRequestDispatcher("/qeadmin.jsp").include(request, response);

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String action = request.getParameter("action");
		String qe = request.getParameter("qe");
		String eta = request.getParameter("eta");
		String comments = request.getParameter("cancelRequest");
		String request_id = request.getParameter("request_id");
		String filepath = "";
		boolean isRequestor = false;
		DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM");
		
		if(action.contentEquals("cancelledcomment")) {
			filepath = uploadfile(request);
			QERequestComments qecomments = new QERequestComments();
			qecomments.setComment(comments);
			qecomments.setTime(LocalDateTime.now().format(formatters).toString());
			if(filepath!=null)
				qecomments.setFile_path(uploadfile(request));
			
			qecomments.setAuthor(((UserDAO) request.getSession().getAttribute("user")).getName());
			isRequestor = true;
			new NewBuildRequestDocument().updateComments(qecomments, request_id, isRequestor);
		} else if(action.contentEquals("assign")){
			new NewBuildRequestDocument().updateQEAndETA(qe, eta, request_id);
		}
		
		if(request.getParameter("author").contentEquals("qe"))
			response.sendRedirect(request.getContextPath()+"/QEUserHome");
		else
			doGet(request, response);

	}
	
	private String uploadfile(HttpServletRequest request) {
		Part filePart;
		String[] file = new String[2];
		String root = getServletContext().getRealPath("/");
		String path = "";
		try {
			 filePart = request.getPart("cancelFile");
			 file[0] = filePart.getSubmittedFileName(); // MSIE fix.
			 InputStream fileContent = filePart.getInputStream();
			 Files.copy(fileContent, Paths.get(root + "/" + file[0]));
			path = Paths.get(root + "/" + file[0]).toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // Retrieves <input type="file" name="file">
	   return path;
		
	}

}
