package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.snapshot.dao.UserDAO;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

public class UserDocument{
		
	MongoCollection<UserDAO> userCollection = MongoConnection.getInstance().mongoDatabase().getCollection("User", UserDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );

	
	public UserDocument() {
		
	}
	
	public UserDocument(UserDAO user) {
		 userCollection.insertOne(user);
		 LOGGER.info(user.getRole() + " " + user.getName() + " account created.") ;
	}

	public UserDAO getUserDetails(String email, String password) {	
		return userCollection.find(Filters.and(eq("email", email),
                eq("password", password))).first();
	}
	
	public List<String> getUsersByRole(String role) {	
		ArrayList<String> allUsersByRole = new ArrayList<String>();
		FindIterable<UserDAO> allUserslist = userCollection.find(Filters.and(eq("role", role)));
		for (UserDAO user : allUserslist) {
			allUsersByRole.add(user.getName());
 		}
		
		return allUsersByRole;
	}

}
