package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class MetadataDAO {
	
	@BsonId private ObjectId _id;
	@BsonProperty("account_name") private String account_name;
	@BsonProperty("name")private String name;
	@BsonProperty("is_required")private String is_required;
	@BsonProperty("expected_values")private String expected_values;
	@BsonProperty("latest_metadata")private String latest_metadata;
	
	public ObjectId get_id() {
		return _id;
	}
	public void set_id(ObjectId _id) {
		this._id = _id;
	}
	public String getAccount_name() {
		return account_name;
	}
	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getIs_required() {
		return is_required;
	}
	public void setIs_required(String is_required) {
		this.is_required = is_required;
	}
	public String getExpected_values() {
		return expected_values;
	}
	public void setExpected_values(String expected_values) {
		this.expected_values = expected_values;
	}
	public String getLatest_metadata_values() {
		return latest_metadata;
	}
	public void setLatest_metadata_values(String latest_metadata) {
		this.latest_metadata = latest_metadata;
	}
	
}

