package com.snapshot.dao;

import java.util.ArrayList;
import java.util.List;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class AccountDAO {
	
	@BsonProperty("_id") private ObjectId _id;
	@BsonProperty("name") private String name;
	@BsonProperty("platform_account_info") private List<Platform_Account_info> platform_account_info;
	@BsonProperty("index") private List<ArrayList<String>> index;
	@BsonProperty("ie") private String ie;
	@BsonProperty("pm") private String pm;

	
	public ObjectId get_id() {
		return _id;
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Platform_Account_info> getPlatform_account_info() {
		return platform_account_info;
	}
	public void setPlatform_account_info(List<Platform_Account_info> platform_account_info) {
		this.platform_account_info = platform_account_info;
	}
	public List<ArrayList<String>> getIndex() {
		return index;
	}
	public void setIndex(List<ArrayList<String>> index) {
		this.index = index;
	}
	public String getIe() {
		return ie;
	}
	public void setIe(String ie) {
		this.ie = ie;
	}
	public String getPm() {
		return pm;
	}
	public void setPm(String pm) {
		this.pm = pm;
	}
	
}
