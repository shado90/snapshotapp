package com.snapshot.mainpages;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.beanutils.BeanUtils;

import com.snapshot.dao.PlayerDeviceInfoDAO;
import com.snapshot.dao.ResultIssuesDAO;
import com.snapshot.dao.ResultObservationsDAO;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;
import com.snapshot.mongoconnection.Document.PlatformDocument;

/**
 * Servlet implementation class QEUserResults
 */
@WebServlet("/QEUserResults")
public class QEUserResults extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QEUserResults() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=UTF-8");

		String request_id = request.getParameter("request_id");
		String action = request.getParameter("action");
		String id = request.getParameter("id");
		String resulttype = request.getParameter("resulttype");
		
		if(action!=null && action.contentEquals("delete")) {
			if(resulttype.contentEquals("issue")) {
				new NewBuildRequestDocument().deleteIssue(request_id, id);
			} else {
				new NewBuildRequestDocument().deleteObservation(request_id, id);
			}
		}
		
		request.setAttribute("platform_name", new PlatformDocument().getPlatform(new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getPlatform_id()).getName());
		request.setAttribute("request_id", request_id);
		request.setAttribute("player_device_info", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getPlayer_device_info());
		request.setAttribute("issues", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getIssues());
		request.setAttribute("observations", new NewBuildRequestDocument().getnewBuildRequestDetails(request_id).getObservations());
		request.getRequestDispatcher("/QEuserresults.jsp").include(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
		String request_id = request.getParameter("request_id");
		String resulttype = request.getParameter("resultType");
		
		if(action!=null && action.contentEquals("updateResult")) {
			if(resulttype.contentEquals("Issues")) {
				new NewBuildRequestDocument().updateIssues((ResultIssuesDAO)getDAOfromRequest(request, new ResultIssuesDAO()), request_id);
			} else {
				new NewBuildRequestDocument().updateObservations((ResultObservationsDAO)getDAOfromRequest(request, new ResultObservationsDAO()), request_id);
			}
		} else if (action!=null && action.contentEquals("addDeviceInfo")) {
			new NewBuildRequestDocument().updatePlatformDeviceInfo((PlayerDeviceInfoDAO)getDAOfromRequest(request,
					new PlayerDeviceInfoDAO()), request_id);
			
		} else if(action!=null && action.contentEquals("sendresults")) {
			new NewBuildRequestDocument().completeValidation(request_id);
		}
		
		
		doGet(request,response);
	}

	public Object getDAOfromRequest(HttpServletRequest request, Object dao) {
        try {
			BeanUtils.populate(dao, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}        
        return dao;
	}
}
