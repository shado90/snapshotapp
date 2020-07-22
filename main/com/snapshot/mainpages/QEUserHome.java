package com.snapshot.mainpages;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.AccountDocument;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;
import com.snapshot.mongoconnection.Document.UserDocument;

/**
 * Servlet implementation class QEUser
 */
@WebServlet("/QEUserHome")
@javax.servlet.annotation.MultipartConfig
public class QEUserHome extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QEUserHome() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setAttribute("allQERequests", new NewBuildRequestDocument().getAllRequestsForQE(
				((UserDAO) request.getSession(false).getAttribute("user")).getName()));
		request.getRequestDispatcher("/qeuser.jsp").include(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			doGet(request,response);
	}
}