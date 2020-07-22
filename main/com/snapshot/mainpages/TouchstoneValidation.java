package com.snapshot.mainpages;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Map;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.NicelyResynchronizingAjaxController;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.html.HtmlTableDataCell;
import com.gargoylesoftware.htmlunit.html.HtmlTextArea;
import com.snapshot.mongoconnection.Document.MetadataDocument;

public class TouchstoneValidation {

	private WebClient webClient = new WebClient(BrowserVersion.FIREFOX_60);
	private Map<String, String> validationResults = new HashMap<String, String>();
	
	public TouchstoneValidation() {
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
	
	public  void loginTouchstone() throws FailingHttpStatusCodeException, MalformedURLException, IOException{

		        HtmlPage page = (HtmlPage) webClient
		                .getPage("https://touchstone.conviva.com/ui?client=2608651.8414143.1450805.12345678&pub=0&before=1552601992.729&session=-277061853");
		        HtmlForm form = page.getFirstByXPath("//form[@action='/login_after']");
		        form.getInputByName("username").setValueAttribute("sdeshpande@conviva.com"); 
		        HtmlInput passWordInput = form.getInputByName("password");
		        passWordInput.removeAttribute("disabled");
		        passWordInput.setValueAttribute("shar@SH90"); 
		        
		        form.getInputByValue("Login").click();
		}

     public Map<String, String> validateMetadataandMetrics(String metadata_url, Map<String, String> parseValidateMetrics, String account_name) {
    	 //TODO
    	 //populate client version in platform version field
    	 //validate if conviva is using the latest version
    	 
    	 try {
    		 loginTouchstone();
    		 validateMetadata(metadata_url, account_name);	
    		 for(Map.Entry<String, String> entry : parseValidateMetrics.entrySet()) {
    			    validateMetric(entry.getKey(), entry.getValue());
    			}    	 
    	 } catch (Exception e) {
    		 e.printStackTrace();
    	 } finally {
		     webClient.close();
    	 }
    	 
    	 return validationResults;
    	 
     }
     
     public void validateMetadata(String metadata_url, String account_name) throws IOException, InterruptedException {
    	 	HtmlPage metadataPage = webClient.getPage("https://touchstone.conviva.com/ui?client=6933564.9748968.4253126.12345694&session=2005958004&pub=0&before=1553841776.0051");
	        
	        int tries = 3;  // Amount of tries to avoid infinite loop
	        while (tries > 0) {
	            tries--;
	            synchronized(metadataPage) {
	            	metadataPage.wait(2000);  // How often to check
	            }
	        }

	        metadataPage = metadataPage.getElementById("collapseSessionInfoButton").click();
	        HtmlTextArea area = metadataPage.getFirstByXPath("//textarea[@style='width:320px']");
	        
	        System.out.println(area.asText());
	             }
     
     public void validateMetric(String metric, String touchstone_url) throws IOException, InterruptedException {
    	    HtmlPage metricpage = webClient.getPage("https://touchstone.conviva.com/ui?client=6933564.9748968.4253126.12345694&session=2005958004&pub=0&before=1553841776.0051");
	        
	        int tries = 3;  // Amount of tries to avoid infinite loop
	        while (tries > 0) {
	            tries--;
	            synchronized(metricpage) {
	            	metricpage.wait(5000);  // How often to check
	            }
	        }

	        metricpage = metricpage.getElementById("collapseSessionInfoButton").click();
	        HtmlTableDataCell cell = (HtmlTableDataCell)metricpage.getByXPath("//div[@style='float:left;width:200px;']//table//tbody//tr//td").get(1);
	        
	        System.out.println(cell);
	        
	        if(metric.replace("_", " ").contentEquals(cell.asText()))
	        	validationResults.put(metric, "Passed");
	        else
	        	validationResults.put(metric, "Fail");

     }
}
