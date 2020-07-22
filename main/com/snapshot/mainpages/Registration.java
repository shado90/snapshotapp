package com.snapshot.mainpages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.mongodb.client.FindIterable;
import com.snapshot.dao.AccountDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.AccountDocument;
import com.snapshot.mongoconnection.Document.UserDocument;

/**
 * Servlet implementation class Registration
 */
@WebServlet("/Registration")
public class Registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Registration() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
        response.setContentType("text/html;charset=UTF-8");
        
        ArrayList<String> account_names = new ArrayList<String>();
        FindIterable<AccountDAO> all_accounts = new AccountDocument().getAllAccounts();
        for(AccountDAO account: all_accounts)
        	account_names.add(account.getName());

        request.setAttribute("account_names", account_names);
        request.setAttribute("ies", new UserDocument().getUsersByRole("ie"));
        request.setAttribute("pms", new UserDocument().getUsersByRole("pm"));
        request.getRequestDispatcher("/registration.jsp").include(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String action = request.getParameter("action");
        
		 if(action.contentEquals("register")) {
		     UserDAO user = getUserDAOfromRequest(request);
	         new UserDocument(user);
	         response.sendRedirect(request.getContextPath() + "/Home");
	     } else if(action.contentEquals("accountregister")) {
	    	 AccountDAO account = getAccountDAOfromRequest(request);
	    	 new AccountDocument(account);
	         response.sendRedirect(request.getContextPath() + "/Registration");
	     }
	}
	
	public UserDAO getUserDAOfromRequest(HttpServletRequest request) {
		UserDAO user = new UserDAO();
        try {
			BeanUtils.populate(user, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}        
        return user;
	}
	
	public AccountDAO getAccountDAOfromRequest(HttpServletRequest request) {
		AccountDAO account = new AccountDAO();
        try {
			BeanUtils.populate(account, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}        
        return account;
	}

}
