package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.logging.Logger;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.snapshot.dao.PlatformDAO;
import com.snapshot.dao.Platform_Account_info;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class PlatformDocument {
	
	MongoCollection<PlatformDAO> platformCollection = MongoConnection.getInstance().mongoDatabase().getCollection("Platform", PlatformDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );

	
	public PlatformDocument() {
		
	}
	
	public PlatformDocument(PlatformDAO platform, String account_name) {
		 ObjectId platform_id = new ObjectId();
		 platform.setPlatform_id(platform_id.toString());
		 platformCollection.insertOne(platform);
		 
		 Platform_Account_info info = new Platform_Account_info();
		 info.setPlatform_id(platform.getPlatform_id());
		 info.setPlatform_name(platform.getName());
		 new AccountDocument().updatePlatform(account_name, info);
		 
		 LOGGER.info(platform.getName() + " platform created for" + account_name);
	}
	
	public PlatformDAO getPlatform(String platform_id) {
		return platformCollection.find(Filters.and(eq("platform_id", platform_id))).first();
	}

	public void update(PlatformDAO platform) {
		platformCollection.updateOne(eq("platform_id",platform.getPlatform_id()), new Document("$set", platform));
	}

	public void delete(String platformId) {
		platformCollection.findOneAndDelete(eq("platform_id",new ObjectId(platformId)));
		 LOGGER.info(platformId + " platform deleted");	
	}


}
