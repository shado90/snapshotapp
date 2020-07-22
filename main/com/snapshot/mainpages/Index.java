package com.snapshot.mainpages;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.snapshot.dao.ConvivaPluginsDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.AccountDocument;
import com.snapshot.mongoconnection.Document.ConvivaPluginsDocument;
import com.snapshot.mongoconnection.Document.IndexDocument;

/**
 * Servlet implementation class Index
 */
@WebServlet("/Home")
public class Index extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Index() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html;charset=UTF-8");

		// TODO Auto-generated method stub
		 this.getServletContext().log("Index filter initialized");
		
		HttpSession session = request.getSession(false); 
		UserDAO dao = (UserDAO)session.getAttribute("user");
		
		new IndexDocument().renderIndex(dao.getAccountname());
	
		request.setAttribute("user", dao);
		request.setAttribute("metrictable", new AccountDocument().getAccountIndex(dao.getAccountname()));
		request.getRequestDispatcher("/index.jsp").include(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
