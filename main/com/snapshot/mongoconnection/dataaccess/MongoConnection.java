package com.snapshot.mongoconnection.dataaccess;


import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.PojoCodecProvider;

import com.mongodb.MongoClientSettings;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.snapshot.dao.UserDAO;

public class MongoConnection {

	private static MongoConnection instance = new MongoConnection();
	
	private MongoClient mongoClient = null;
	private CodecRegistry pojoCodecRegistry;

	private MongoConnection() {}
	
	public MongoClient getMongo() throws RuntimeException {
		
		if (mongoClient == null) {
			 mongoClient = MongoClients.create();
		}

		return mongoClient;
	}
	
	public MongoDatabase mongoDatabase() {
	    CodecRegistry defaultCodecRegistry = MongoClientSettings.getDefaultCodecRegistry();
	    CodecRegistry fromProvider = CodecRegistries.fromProviders(PojoCodecProvider.builder().automatic(true).build());
	    pojoCodecRegistry = CodecRegistries.fromRegistries(defaultCodecRegistry, fromProvider);
	    return getMongo().getDatabase("plm").withCodecRegistry(pojoCodecRegistry);
	}
	
	public void close() {
		
	}
	
	public static MongoConnection getInstance() {
		return instance;
	}

	public MongoCollection<Document> getPLMCollection(String string) {
		// TODO Auto-generated method stub
		return null;
	}
}