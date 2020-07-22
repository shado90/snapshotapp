package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonProperty;

public class PlayerDeviceInfoDAO {
	
	@BsonProperty("devicename") private String devicename;
	@BsonProperty("devicemodel") private String devicemodel;
	@BsonProperty("os") private String os;
	@BsonProperty("osversion") private String osversion;
	@BsonProperty("browserName") private String browserName;
	@BsonProperty("browserVersion") private String browserVersion;
	
	public String getDevicename() {
		return devicename;
	}
	public void setDevicename(String devicename) {
		this.devicename = devicename;
	}
	public String getDevicemodel() {
		return devicemodel;
	}
	public void setDevicemodel(String devicemodel) {
		this.devicemodel = devicemodel;
	}
	public String getOs() {
		return os;
	}
	public void setOs(String os) {
		this.os = os;
	}
	public String getOsversion() {
		return osversion;
	}
	public void setOsversion(String osversion) {
		this.osversion = osversion;
	}
	public String getBrowserName() {
		return browserName;
	}
	public void setBrowserName(String browserName) {
		this.browserName = browserName;
	}
	public String getBrowserVersion() {
		return browserVersion;
	}
	public void setBrowserVersion(String browserVersion) {
		this.browserVersion = browserVersion;
	}
	
	

}
