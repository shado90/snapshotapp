package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

import org.bson.Document;

import com.mongodb.client.MongoCollection;
import com.snapshot.dao.AccountDAO;
import com.snapshot.dao.NewBuildRequestDAO;
import com.snapshot.dao.Platform_Account_info;
import com.snapshot.dao.ResultIssuesDAO;
import com.snapshot.mainpages.enums.MetricEnum;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class IndexDocument {
	
	MongoCollection<AccountDAO> accountsCollection = MongoConnection.getInstance().mongoDatabase().getCollection("Account", AccountDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );
	
	public IndexDocument() {
		
	}
	
	public void renderIndex(String accountName) {
		List<Platform_Account_info> platforms = accountsCollection.find(eq("name",accountName)).first().getPlatform_account_info();
		
		boolean isActiveRequest = false;
		ArrayList<String> firstColumn = new ArrayList<String>();
		firstColumn.add("<span class='date'>Platform<button class='btn-plus' id='modalAddPlatform'><i class='icon icon-plus'></i></button></span>");
		firstColumn.add("<b>Validation Date</b>");
		firstColumn.add("<b>Validation Status</b>");
		
		for (MetricEnum metrics: MetricEnum.values()) 
			firstColumn.add("<b>" + metrics.name() + "</b>");
				
		List<ArrayList<String>> metricsTable = new ArrayList<ArrayList<String>>();
		metricsTable.add(firstColumn);

		if(platforms==null) {
			accountsCollection.updateOne(eq("name",accountName), new Document("$set", 
					new Document("index", metricsTable)));
			return;
		}
		for(Platform_Account_info platform_acc: platforms) {
			boolean isNewBuildRequestValid = false;

			ArrayList<String> platform = new ArrayList<String>(); //for each platform
			NewBuildRequestDAO pendingrequest = new NewBuildRequestDocument().getPending(platform_acc.getPlatform_id());
			
			platform.add("<p class='modalViewPlatform' id=" + platform_acc.getPlatform_id() + " >" + platform_acc.getPlatform_name() + "</p>");
			
			NewBuildRequestDocument newbuilddoc = new NewBuildRequestDocument();
			if(newbuilddoc.getnewBuildRequestDetailsByPlatformId(platform_acc.getPlatform_id())!=null) {
				if(newbuilddoc.getAllPreviousValidations(platform_acc.getPlatform_id()).size()>1) {
					isNewBuildRequestValid = true;
				} else if(pendingrequest!=null) {
					System.out.println(pendingrequest.getInstructions());
					platform.add("<span class=\"date\">NA<button class=\"btn-status btn-status--empty\" ><img class='modalViewBuildRequest' id=" + pendingrequest.getId().toString() + " src=\"images/pencil.png\" ></button></span>");
				} 
			} 
			isNewBuildRequestValid = true;

			if(isNewBuildRequestValid) {
				NewBuildRequestDAO newbuildrequest = new NewBuildRequestDocument().getnewBuildRequestDetailsByPlatformId("5c951856af6aca3cfab428b4");
				if(pendingrequest!=null)
					platform.add("<span class='date'>" + newbuildrequest.getValidated_date() + "<button class=\\\"btn-status btn-status--empty\\\" ><img class='modalViewBuildRequest' id=" + pendingrequest.getId().toString() + " src=\\\"images/pencil.png\\\" ></button></span>");
				else
					platform.add("<span class='date'>" + newbuildrequest.getValidated_date() + "<button class='modalAddBuildRequest' id=" + platform_acc.getPlatform_id() + "><i class='icon icon-plus'></i></button></span>");
					
				if(newbuildrequest.getIssues() != null)
					platform.add("<button class='btn-status btn-status--fail'>Fail</button>");
				else
					platform.add("<button class='btn-status btn-status--passed'>Passed</button>");
				
				List<ResultIssuesDAO> issues = newbuildrequest.getIssues();
				Set<String> issueset = new HashSet<String>();
				
				for(ResultIssuesDAO issue: issues) {
					issueset.add(issue.getMetric());
				}

				for (MetricEnum metric: MetricEnum.values()) {
					if(issueset.contains(metric.name()))
						platform.add("<button class='btn-status btn-status--fail metric:-" + metric.name() + "'>Fail</button>");
					else
						platform.add("<button class='btn-status btn-status--passed'>Passed</button>");
				}
			} else {
				if(pendingrequest==null)
					platform.add("<span class=\"date\">NA<button class=\"modalAddBuildRequest btn-status btn-status--empty\" id=" +platform_acc.getPlatform_id()+ "><i class=\"icon icon-plus\"></i></button></span>");
				platform.add("<button class=\"btn-status btn-status--empty\">NA</button>");
				
				for (MetricEnum metric: MetricEnum.values()) {
					platform.add("<button class=\"btn-status btn-status--empty\">NA</button>");
				}

			}
			
			
			metricsTable.add(platform);
		}
		
		accountsCollection.updateOne(eq("name",accountName), new Document("$set", 
				new Document("index", metricsTable)));
	}
	
	public void runIndexPage(String account_name) {
		new Thread(new Runnable() {
		     @Override
		     public void run() {
		    	 renderIndex(account_name);
		     }
		}).start();
	}

}
