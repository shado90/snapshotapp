package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.logging.Logger;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.snapshot.dao.ConvivaPluginsDAO;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class ConvivaPluginsDocument{
		
	MongoCollection<ConvivaPluginsDAO> convivaPluginsCollection = MongoConnection.getInstance().mongoDatabase().getCollection("ConvivaPlugin", ConvivaPluginsDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );

	public ConvivaPluginsDocument() {
	}
	
	public ConvivaPluginsDocument(ConvivaPluginsDAO convivaPlugin) {
		convivaPluginsCollection.insertOne(convivaPlugin);
	}
	
	public void update(String id, ConvivaPluginsDAO convivaPlugin) {
		convivaPluginsCollection.updateOne((eq("_id",new ObjectId(id))),
				new Document("$set", convivaPlugin));
	}
	
	public FindIterable<ConvivaPluginsDAO> getAllPlugins() {
		return convivaPluginsCollection.find();
	}

}
