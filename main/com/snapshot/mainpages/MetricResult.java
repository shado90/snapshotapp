package com.snapshot.mainpages;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.snapshot.dao.NewBuildRequestDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;
import com.snapshot.mongoconnection.Document.PlatformDocument;

/**
 * Servlet implementation class MetricResult
 */
@WebServlet("/MetricResult")
public class MetricResult extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MetricResult() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at:metricresult ").append(request.getContextPath());
		response.setContentType("text/html;charset=UTF-8");
	
		String request_id = request.getParameter("request_id");
		String action = request.getParameter("action");
		UserDAO user = ((UserDAO) request.getSession(false).getAttribute("user"));
		
		if(action!=null && action.contentEquals("allplatforms")) {
			request.setAttribute("all_platforms_issues", new NewBuildRequestDocument().getIssuesfromAllPlatforms(user.getAccountname()));
			request.getRequestDispatcher("/metricresultsall.jsp").include(request, response);	
		} else {
			request.setAttribute("request_id", request_id);
			request.setAttribute("player_device_info", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getPlayer_device_info());
			request.setAttribute("issues", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getIssues());
			request.setAttribute("observations", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getObservations());
			request.getRequestDispatcher("/metricresults.jsp").include(request, response);
		}
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
