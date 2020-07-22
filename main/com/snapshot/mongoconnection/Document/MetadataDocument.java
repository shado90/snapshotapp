package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.logging.Logger;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.mongodb.client.MongoCollection;
import com.snapshot.dao.MetadataDAO;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class MetadataDocument {
	
	MongoCollection<MetadataDAO> metadataCollection = MongoConnection.getInstance().mongoDatabase().getCollection("Metadata", MetadataDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );

	
	public MetadataDocument() {
		
	}
	
	public MetadataDocument(MetadataDAO metadata) {
		 metadataCollection.insertOne(metadata);
	}
	
	public void update(MetadataDAO metadata, String id) {
		metadataCollection.updateOne(eq("_id",new ObjectId(id)), new Document("$set", metadata));
	}
	
	public void updateValidatedMetadata(String latest_metadata, String account_name) {
		metadataCollection.updateOne(eq("account_name",new ObjectId(account_name)), new Document("$set", 
					new Document("latest_metadata", latest_metadata)));
	}

	public void delete(String id) {
		metadataCollection.deleteOne(eq("_id",new ObjectId(id)));	
	}
	
	public void renderIndex(String account_name) {
		
	}
}
