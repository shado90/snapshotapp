package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class ConvivaPluginsDAO {
	
	@BsonProperty("_id") private ObjectId _id;
	@BsonProperty("name") private String name;
	@BsonProperty("version") private String version;
	@BsonProperty("page_url") private String page_url;
	@BsonProperty("limitations") private String limitations;
	@BsonProperty("open_issues") private String open_issues;
	
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
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public String getPage_url() {
		return page_url;
	}
	public void setPage_url(String page_url) {
		this.page_url = page_url;
	}
	public String getLimitations() {
		return limitations;
	}
	public void setLimitations(String limitations) {
		this.limitations = limitations;
	}
	public String getOpen_issues() {
		return open_issues;
	}
	public void setOpen_issues(String open_issues) {
		this.open_issues = open_issues;
	}
	
}
