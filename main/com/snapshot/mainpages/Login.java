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

import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.UserDocument;

@WebServlet("/Login")
public class Login extends HttpServlet {

	/**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
    }
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		String action = request.getParameter("action");
		
		if (action!=null && action.contentEquals("logout")) {
        	request.getSession(false).invalidate();
            this.getServletContext().log("user -->logged out");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
		
        request.getRequestDispatcher("/login.jsp").forward(request, response);
       
    }  
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
		
        response.setContentType("text/html;charset=UTF-8");
        
        UserDAO user = new UserDAO();
        try {
			BeanUtils.populate(user, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
        
        String action = request.getParameter("action");
                
       if (action.contentEquals("login")) {
        	UserDocument userDoc = new UserDocument();
        	
        	if(userDoc.getUserDetails(user.getEmail(), user.getPassword()) != null) {
        		UserDAO loggedUser = userDoc.getUserDetails(user.getEmail(), user.getPassword());
        		
        		 HttpSession oldSession = request.getSession(false);
                 if (oldSession != null) {
                     oldSession.invalidate();
                 }
        		
        		HttpSession session = request.getSession(true); 
        		session.setMaxInactiveInterval(5*600);
        		session.setAttribute("user", loggedUser);
        		
        		this.getServletContext().log(loggedUser.getRole() + " " + loggedUser.getName() + " logged in");
        		
        		switch(loggedUser.getRole()) {
        		case "qe":
            		response.sendRedirect(request.getContextPath() + "/QEUserHome");
            		return;
        		case "qeadmin":
            		response.sendRedirect(request.getContextPath() + "/QEAdminHome");
                    return;
        		case "admin":
	        		response.sendRedirect(request.getContextPath() + "/Home");
	                return;
        		case "user":
	        		response.sendRedirect(request.getContextPath() + "/Home");
	                return;
        		}

        	}	else {
                request.setAttribute("error", "Invalid login. Please enter your credentials again");
                request.getRequestDispatcher("/login.jsp").forward(request, response);
        	}
        } 
    }  


	}