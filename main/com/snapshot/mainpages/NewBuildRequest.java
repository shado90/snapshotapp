package com.snapshot.mainpages;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.apache.commons.beanutils.BeanUtils;

import com.google.gson.Gson;
import com.snapshot.dao.NewBuildRequestDAO;
import com.snapshot.dao.QERequestComments;
import com.snapshot.dao.ResultIssuesDAO;
import com.snapshot.dao.UserDAO;
import com.snapshot.mainpages.enums.MetricEnum;
import com.snapshot.mongoconnection.Document.NewBuildRequestDocument;

/**
 * Servlet implementation class NewBuildRequest
 */
@WebServlet("/NewBuildRequest")
@MultipartConfig
public class NewBuildRequest extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NewBuildRequest() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		String request_id = request.getParameter("request_id");
		String action = request.getParameter("action");
		String platform_id = request.getParameter("platform_id");
	    Map<String, String> validationResults = new HashMap<String, String>();
		String metadata_url = request.getParameter("metadata_url");
		UserDAO userDao = ((UserDAO) request.getSession().getAttribute("user"));

		if(action.contentEquals("view")) {
			response.setContentType("application/json");
    		response.getWriter().write(new Gson().toJson(new NewBuildRequestDocument().getnewBuildRequestDetails(request_id)));
		} else if(action.contentEquals("delete")) {
			new NewBuildRequestDocument().delete(request_id);
		} else if(action.contentEquals("issues")) {
			List<ResultIssuesDAO> issues = new NewBuildRequestDocument().getLastValidated(platform_id).getIssues();
			ArrayList<String> issuelist = new ArrayList<String>();
			for(ResultIssuesDAO issue: issues) {
				if(issue.getMetric().contentEquals("Video_Start_Failure") ||
					issue.getMetric().contentEquals("Video_Playback_Failures") ||
					issue.getMetric().contentEquals("Average_Bitrate"))
				issuelist.add("issue_" + issue.getMetric());
			}
			response.setContentType("application/json");
			response.getWriter().write(new Gson().toJson(issuelist));
		} else if(action.contentEquals("validateMetrics")) {
			validationResults = new TouchstoneValidation().validateMetadataandMetrics(
					"https://touchstone.conviva.com/ui?client=8097048.2538265.9326045.12345678&session=-1369888756&pub=0&before=1553124550.4621997", parseValidateMetrics(request),
					userDao.getAccountname());
			
			response.setContentType("application/json");
			response.getWriter().write(new Gson().toJson(validationResults));
		}
    	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html;charset=UTF-8");
		
		String action = request.getParameter("action");
		String request_id = request.getParameter("request_id");
		String comments = request.getParameter("comments");
		UserDAO userDao = ((UserDAO) request.getSession().getAttribute("user"));
		DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM");
		
		if(action.contentEquals("register")) {
			NewBuildRequestDAO newBuildDetails = getNewBuildRequestDAOfromRequest(request);
			if(newBuildDetails.getBuild_submit_type().contentEquals("upload")) {
	            newBuildDetails.setFile_path(uploadfile(request));
			} 

			newBuildDetails.setRequested_date(LocalDateTime.now().format(formatters).toString());
			newBuildDetails.setRequestor(userDao.getName());
			newBuildDetails.setNext_action("Ankur");
			newBuildDetails.setAccount_name(userDao.getAccountname());
			newBuildDetails.setIs_active("true");
			new NewBuildRequestDocument(newBuildDetails);
			
		} else if(action.contentEquals("update")){
			QERequestComments qecomments = new QERequestComments();
			qecomments.setComment(comments);
			qecomments.setTime(LocalDateTime.now().format(formatters).toString());
			qecomments.setAuthor(userDao.getName());
			
			new NewBuildRequestDocument().updateComments(qecomments, request_id, false);
		}
		
		request.getRequestDispatcher("/Home").include(request, response);
	}

	private Map<String, String> parseValidateMetrics(HttpServletRequest request) {
		Map<String, String> metricsmap = new HashMap<String, String>();
		if(request.getParameter(MetricEnum.Average_Bitrate.name()) !=null)
			metricsmap.put("Average_Bitrate", request.getParameter(MetricEnum.Average_Bitrate.name()));
		if(request.getParameter(MetricEnum.Video_Start_Failure.name()) !=null)
			metricsmap.put("Video_Start_Failure", request.getParameter(MetricEnum.Video_Start_Failure.name()));
		if(request.getParameter(MetricEnum.Video_Playback_Failure.name()) !=null)
			metricsmap.put("Video_Playback_Failure", request.getParameter(MetricEnum.Video_Playback_Failure.name()));
		
		return metricsmap;
	}

	private String uploadfile(HttpServletRequest request) {
		Part filePart;
		String file = null;
		
		File fileFolder = new File(System.getProperty("catalina.base") + "/documents/" + request.getParameter("platform_id"));
		fileFolder.getParentFile().mkdirs();
				
		try {
			 filePart = request.getPart("uploadfile");
			 file = filePart.getSubmittedFileName(); // MSIE fix.
			 InputStream fileContent = filePart.getInputStream();
			 Files.copy(fileContent, Paths.get(fileFolder + "/" + file));
			 file = Paths.get(fileFolder + "/" + file).toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} // Retrieves <input type="file" name="file">
	   return file;
		
	}
	
	public NewBuildRequestDAO getNewBuildRequestDAOfromRequest(HttpServletRequest request) {
		NewBuildRequestDAO newBuildRequest = new NewBuildRequestDAO();
        try {
			BeanUtils.populate(newBuildRequest, request.getParameterMap());
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
        
        return newBuildRequest;
	}

}

