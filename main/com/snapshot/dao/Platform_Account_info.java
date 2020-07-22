package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonProperty;

public class Platform_Account_info {
	
	@BsonProperty("platform_id") private String platform_id;
	@BsonProperty("platform_name") private String platform_name;
	public String getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(String platform_id) {
		this.platform_id = platform_id;
	}
	public String getPlatform_name() {
		return platform_name;
	}
	public void setPlatform_name(String platform_name) {
		this.platform_name = platform_name;
	}
	
	

}
