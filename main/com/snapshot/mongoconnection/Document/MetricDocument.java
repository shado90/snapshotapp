package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

import org.bson.Document;

import com.mongodb.BasicDBList;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class MetricDocument {
	MongoCollection<Document> metricCollection = MongoConnection.getInstance().getPLMCollection("Result");
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );
	private Document doc = null;
	
	public MetricDocument(String platformId) {
		doc = metricCollection.find(Filters.and(eq("platformId", platformId),
                eq("lastValidated", true))).first();		
	}
	
	public String lastValidatedDate() {
		return doc.getString("lastValidatedDate");
	}
	
	public Set<String> getFailedMetrics(){
		 BasicDBList failedMetrics = (BasicDBList) doc.get("issues");
		 
		 Set<String> failedMetricsSet = new HashSet<String>();
		 for(Object metric: failedMetrics) {
			 failedMetricsSet.add((String)metric);
		 }

		return failedMetricsSet;
	}
}

