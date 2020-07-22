package com.snapshot.mongoconnection.Document;

import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import org.bson.Document;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.IndexOptions;
import com.mongodb.client.model.Updates;
import com.snapshot.dao.AccountDAO;
import com.snapshot.dao.Platform_Account_info;
import com.snapshot.mongoconnection.dataaccess.MongoConnection;

import static com.mongodb.client.model.Projections.include;

public class AccountDocument{
		
	MongoCollection<AccountDAO> accountCollection = MongoConnection.getInstance().mongoDatabase().getCollection("Account", AccountDAO.class);
	private static final Logger LOGGER = Logger.getLogger( UserDocument.class.getName() );

	public AccountDocument() {
	}
	
	public AccountDocument(AccountDAO account) {
		 accountCollection.createIndex(new Document("name", 1), new IndexOptions().unique(true));
		 
		 accountCollection.insertOne(account);
		 
		 LOGGER.info(account.getName() + " account created.") ;
	}
	
	public void updatePlatform(String accountName, Platform_Account_info info) {
		accountCollection.updateOne((eq("name",accountName)),
				Updates.push("platform_account_info", info));
			}
	
	public AccountDAO getAccountInfoByPlatformId(String platform_id) {
		return accountCollection.find(eq("platform_id",platform_id)).first();
	}
	
	public List<Platform_Account_info> getPlatformsByAccount(String account_name) {
		return accountCollection.find(eq("name",account_name)).first().getPlatform_account_info();
	}
	
	
	public List<ArrayList<String>> getAccountIndex(String account_name) {
		return accountCollection.find(eq("name",account_name)).first().getIndex();
	}
	
	public FindIterable<AccountDAO> getAllAccounts() {
		return accountCollection.find();
	}

}
