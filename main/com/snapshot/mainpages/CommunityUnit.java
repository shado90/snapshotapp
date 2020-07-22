package com.snapshot.mainpages;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.NicelyResynchronizingAjaxController;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlListItem;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.html.HtmlTable;
import com.gargoylesoftware.htmlunit.html.HtmlTableBody;
import com.gargoylesoftware.htmlunit.html.HtmlTableRow;
import com.gargoylesoftware.htmlunit.html.HtmlUnorderedList;
import com.snapshot.dao.ConvivaPluginsDAO;
import com.snapshot.mongoconnection.Document.ConvivaPluginsDocument;

public class CommunityUnit {

	private WebClient webClient = new WebClient(BrowserVersion.FIREFOX_60);
	
	public CommunityUnit() {
		 webClient.addRequestHeader("Accept-Encoding", "compress, gzip");
         webClient.getOptions().setPrintContentOnFailingStatusCode(true);
         webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
         webClient.getOptions().setThrowExceptionOnScriptError(false);
         webClient.getOptions().setJavaScriptEnabled(true);
         webClient.getOptions().setCssEnabled(false);
         webClient.getOptions().setPopupBlockerEnabled(true);
         webClient.getOptions().setMaxInMemory(3);
         webClient.getOptions().setRedirectEnabled(true);
         webClient.setAjaxController(new NicelyResynchronizingAjaxController());
	}
	
	public  void loginCommunity() throws FailingHttpStatusCodeException, MalformedURLException, IOException, InterruptedException{

		        HtmlPage page = (HtmlPage) webClient
		                .getPage("https://community.conviva.com/site/global/home/p_home.gsp");
		        HtmlListItem item = (HtmlListItem)page.getByXPath("//li[@class='dropdown']").get(0);
		        item.click();
		        
		        int tries = 1;  // Amount of tries to avoid infinite loop
		        while (tries > 0) {
		            tries--;
		            synchronized(page) {
		            	page.wait(2000);  // How often to check
		            }
		        }
		        
		        HtmlForm form = page.getFirstByXPath("//form[@action='https://community.conviva.com/j_spring_security_check']");
		        form.getInputByName("j_username").setValueAttribute("sdeshpande@conviva.com"); 
		        HtmlInput passWordInput = form.getInputByName("j_password");
		        passWordInput.removeAttribute("disabled");
		        passWordInput.setValueAttribute("shar@SH90"); 
		        
		        
		        form.getButtonByName("submit").click();
	}
	
	public void updateConvivaPluginInfo() {
		try {
		 loginCommunity();
		 parseReleaseNotes();   		    	 
   	 } catch (Exception e) {
   		 e.printStackTrace();
   	 } finally {
		     webClient.close();
   	 }
   	 
	}
	
	public void parseReleaseNotes() throws FailingHttpStatusCodeException, MalformedURLException, IOException {
		String releaseNotesURL = "https://community.conviva.com/site/global/platforms/releases/index.gsp";
		String version = "";
		ConvivaPluginsDAO plugin = new ConvivaPluginsDAO();
		boolean isFirstRow = false;
				
		HtmlPage page = (HtmlPage) webClient
                .getPage(releaseNotesURL);
		HtmlUnorderedList ulitem = (HtmlUnorderedList)page.getFirstByXPath("//ul[@id='steps']");
		List<HtmlListItem> liitems = ulitem.getByXPath("//li[@class='stepItem']");
			for(HtmlListItem listitem: liitems) {
				String name = listitem.getFirstElementChild().asText();
				HtmlTable htmltable = (HtmlTable)listitem.getElementsByTagName("table").get(0);
				HtmlTableBody htmltablebody = htmltable.getBodies().get(0);
				for(HtmlTableRow row: htmltablebody.getRows()) {
					isFirstRow = row.getCell(0).hasAttribute("rowspan");
					String rowname = row.getCell(0).asText();
					
					if (isFirstRow || rowname.contentEquals("Amazon Fire TV")) {
						String href = ((HtmlAnchor)row.getCell(1).getFirstChild()).getHrefAttribute();
						plugin.setName(" (" + name + ")"+ row.getCell(0).asText());
						version = (((HtmlAnchor)row.getCell(1).getFirstChild()).asText() + "(latest_version),");
						plugin.setPage_url("https://community.conviva.com" + href);
						plugin.setVersion(version);
						if( rowname.contentEquals("1") || rowname.contentEquals("Amazon Fire TV")) {
							new ConvivaPluginsDocument(plugin);
							plugin = new ConvivaPluginsDAO();
						}
					} else {
						version+=((HtmlAnchor)row.getCell(0).getFirstChild()).asText();
						plugin.setVersion(version);
						new ConvivaPluginsDocument(plugin);
						plugin = new ConvivaPluginsDAO();
					}

					}
				}
	}
		

	
	public String parseLimitations(String URL) throws FailingHttpStatusCodeException, MalformedURLException, IOException {
		HtmlPage page = (HtmlPage) webClient
                .getPage("https://community.conviva.com" + URL);
		HtmlListItem item = (HtmlListItem)page.getFirstByXPath("//ul[@id='steps']//li[@id='limitations']");

		if(URL.contains("html5"))
			 item = (HtmlListItem)page.getFirstByXPath("//ul[@id='steps']//li[@id='limit']");
		
		HtmlTable table = (HtmlTable)item.getFirstByXPath("//table[@class='table extend ']");
		HtmlTableBody htmltablebody = table.getBodies().get(0);

		StringBuilder limitations = new StringBuilder();
		for (HtmlTableRow row:htmltablebody.getRows()) {
			limitations.append(row.getCell(0).asText()+",");
		}
		
		return limitations.toString();
	}

     
}
