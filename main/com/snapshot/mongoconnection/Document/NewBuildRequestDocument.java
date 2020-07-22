package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Projections.include;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import java.util.logging.Logger;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Sorts;
import com.mongodb.client.model.Updates;
import com.snapshot.dao.NewBuildRequestDAO;
import com.snapshot.dao.Platform_Account_info;
import com.snapshot.dao.PlayerDeviceInfoDAO;
import com.snapshot.dao.QEAdminFieldsDAO;
import com.snapshot.dao.QERequestComments;
import com.snapshot.dao.ResultIssuesDAO;
import com.snapshot.dao.ResultObservationsDAO;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class NewBuildRequestDocument {
	
	MongoCollection<NewBuildRequestDAO> newBuildRequestCollection = MongoConnection.getInstance().mongoDatabase().getCollection("NewBuildRequest", NewBuildRequestDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );
	
	public NewBuildRequestDocument() {
		
	}
	
	public NewBuildRequestDocument(NewBuildRequestDAO newBuildRequest) {
		newBuildRequestCollection.insertOne(newBuildRequest);
	}

	public void delete(String request_Id) {
		newBuildRequestCollection.findOneAndDelete(eq("_id",new ObjectId(request_Id)));		
	}
	
	public Document getDocument(HashMap<String,String> requestValues) {
		
		 Document doc = new Document();
		 
		 for (Entry<String, String> requestValue : requestValues.entrySet()) {
			 doc.append(requestValue.getKey(), requestValue.getValue());
		 }
		 
		 return doc;
		
	}
	
	public NewBuildRequestDAO getnewBuildRequestDetails(String request_id){
		return newBuildRequestCollection.find(eq("_id", new ObjectId(request_id))).first();
	}
	
	public NewBuildRequestDAO getnewBuildRequestDetailsByPlatformId(String platform_id){
		return newBuildRequestCollection.find(eq("platform_id", platform_id)).first();
	}
	
	public List<QEAdminFieldsDAO> getAllRequestsForQE(String qe){
		List<QEAdminFieldsDAO> allQErequests = new ArrayList<QEAdminFieldsDAO>();
		FindIterable<NewBuildRequestDAO> allrequests;
		
		System.out.println(qe);
		allrequests = newBuildRequestCollection.find(eq("next_action",qe));
		
		for(NewBuildRequestDAO newBuildRequest: allrequests) {
			QEAdminFieldsDAO qeFields = new QEAdminFieldsDAO();
			qeFields.set_id("id_" + newBuildRequest.getId());
			qeFields.setAccount_name(newBuildRequest.getAccount_name());
			qeFields.setPlatform_name(new PlatformDocument().getPlatform(newBuildRequest.getPlatform_id()).getName());
			qeFields.setPassword(newBuildRequest.getPassword());
			qeFields.setInstructions(newBuildRequest.getInstructions());
			qeFields.setMetrics(newBuildRequest.getMetrics());
			
			if(newBuildRequest.getBuild_submit_type().contentEquals("upload"))
				qeFields.setBuild_submit_type(newBuildRequest.getFile_path());
			else if(newBuildRequest.getBuild_submit_type().contentEquals("url"))
				qeFields.setBuild_submit_type(newBuildRequest.getBuild_url());
			else 
				qeFields.setBuild_submit_type("testflight");
		
			allQErequests.add(qeFields);
		}
		
		return allQErequests;
	}
	
	public ArrayList<String> getAllPreviousValidations(String platform_id) {
		FindIterable<NewBuildRequestDAO> newBuildRequests = 
				newBuildRequestCollection.find(eq("platform_id", new ObjectId(platform_id)))
					.sort(Sorts.descending("iteration"));
		ArrayList<String> previousIterations = new ArrayList<String>();
		for(NewBuildRequestDAO newbuildrequest: newBuildRequests) {
			previousIterations.add(newbuildrequest.getId().toString());
		}
		return previousIterations;
	}
	
	public NewBuildRequestDAO getLastValidated(String platform_id) {
		
		return newBuildRequestCollection.find(eq("platform_id", platform_id))
				.sort(Sorts.descending("completedDate")).first();
	}
	
	public void updateQEAndETA(String qe, String eta, String request_id){
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), new Document("$set", 
				new Document("next_action", qe).append("eta", eta)));
	}
	
	public void updateComments(QERequestComments comments, String request_id, boolean isRequestor){
				newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
						Updates.push("comments", comments));
				updateNextAction(request_id);
	}
	
	public void updateNextAction(String request_id){
		String requestor = getnewBuildRequestDetails(request_id).getRequestor();
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				new Document("$set", 
						new Document("next_action", requestor)));
	}
	
	public void updateIssues(ResultIssuesDAO issues, String request_id){
			issues.setIssue_id(new ObjectId().toString());
			newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				Updates.push("issues", issues));
	}
	
	public void updateObservations(ResultObservationsDAO observations, String request_id){
		observations.setObservation_id(new ObjectId().toString());
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				Updates.push("observations", observations));
	}
	
	public void updatePlatformDeviceInfo(PlayerDeviceInfoDAO platdeviceInfoDAO, String request_id){
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				new Document("$set", 
						new Document("player_device_info", platdeviceInfoDAO)));
	}
	
	public FindIterable<NewBuildRequestDAO> getAllNewBuildRequests(){
		return newBuildRequestCollection.find();
	}

	public FindIterable getallIssuesByMetric(ObjectId _id, String metric) {
		return newBuildRequestCollection.find(Filters.and(eq("_id", _id),
				eq("issues.metric", metric))).projection(include("issues"));	
	}

	public void deleteIssue(String request_id, String id) {
		System.out.println("issue" + id);
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				Updates.pull("issues", new Document("issue_id", id)));
	}
	
	public void deleteObservation(String request_id, String id) {
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)), 
				Updates.pull("observations", new Document("observation_id", id)));
	}

	public NewBuildRequestDAO getPending(String platform_id) {
		return newBuildRequestCollection.find(Filters.and(eq("platform_id", platform_id),
					eq("is_active", "true"))).first();
	}

	public void completeValidation(String request_id){
		DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM");
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)),
				new Document("$set", 
						new Document("validated_date", LocalDateTime.now().format(formatters).toString())));
		
		newBuildRequestCollection.updateOne(eq("_id",new ObjectId(request_id)),
				new Document("$set", 
						new Document("is_Active", false)));
	}
	
	public List<ArrayList<ResultIssuesDAO>> getIssuesfromAllPlatforms(String account_name) {
		List<ArrayList<ResultIssuesDAO>> all_platforms_issues = new ArrayList<ArrayList<ResultIssuesDAO>>();
		List<String> platform_names = new ArrayList<String>();
		
		for (Platform_Account_info platform: new AccountDocument().getPlatformsByAccount(account_name)) {
			all_platforms_issues.add((ArrayList<ResultIssuesDAO>)new NewBuildRequestDocument().
					getnewBuildRequestDetailsByPlatformId(platform.getPlatform_id()).getIssues());
		}
		
		return all_platforms_issues;
	}
}



