package com.snapshot.mainpages;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.snapshot.dao.ConvivaPluginsDAO;
import com.snapshot.mongoconnection.Document.ConvivaPluginsDocument;
import com.snapshot.mongoconnection.Document.PlatformDocument;

/**
 * Servlet implementation class OpenIssues
 */
@WebServlet("/ConvivaPlugins")
public class ConvivaPlugins extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ConvivaPlugins() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String action = request.getParameter("action");
		
		if(action!=null && action.contentEquals("getNames")) {
			ArrayList<String> pluginList = new ArrayList<String>();
			for (ConvivaPluginsDAO plugin: new ConvivaPluginsDocument().getAllPlugins())
				pluginList.add(plugin.getName());
			
			response.setContentType("application/json");
    		response.getWriter().write(new Gson().toJson(pluginList));
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
