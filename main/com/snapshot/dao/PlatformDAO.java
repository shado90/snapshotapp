package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public final class PlatformDAO {
	
	@BsonId private ObjectId _id;
	@BsonProperty("platform_id") private String platform_id;
	@BsonProperty("name")private String name;
	@BsonProperty("content_type")private String content_type;
	@BsonProperty("iteration")private int iteration;
	@BsonProperty("player_name")private String player_name;
	@BsonProperty("streaming_protocol")private String streaming_protocol;
	@BsonProperty("player_version")private String player_version;
	@BsonProperty("conviva_plugin")private String conviva_plugin;
	@BsonProperty("app_version")private String app_version;
	@BsonProperty("conviva_plugin_version")private String conviva_plugin_version;
	@BsonProperty("ads")private String ads;
	@BsonProperty("notes")private String notes;
	@BsonProperty("limitations")private String limitations;
	@BsonProperty("special_test_cases")private String special_test_cases;
	
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
	public String getContent_type() {
		return content_type;
	}
	public void setContent_type(String content_type) {
		this.content_type = content_type;
	}
	public String getPlayer_name() {
		return player_name;
	}
	public void setPlayer_name(String player_name) {
		this.player_name = player_name;
	}
	public String getStreaming_protocol() {
		return streaming_protocol;
	}
	public void setStreaming_protocol(String streaming_protocol) {
		this.streaming_protocol = streaming_protocol;
	}
	public String getPlayer_version() {
		return player_version;
	}
	public void setPlayer_version(String player_version) {
		this.player_version = player_version;
	}
	public String getConviva_Plugin() {
		return conviva_plugin;
	}
	public void setConviva_Plugin(String conviva_plugin) {
		this.conviva_plugin = conviva_plugin;
	}
	public String getAds() {
		return ads;
	}
	public void setAds(String ads) {
		this.ads = ads;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getLimitations() {
		return limitations;
	}
	public void setLimitations(String limitations) {
		this.limitations = limitations;
	}
	public String getSpecial_test_cases() {
		return special_test_cases;
	}
	public void setSpecial_test_cases(String special_test_cases) {
		this.special_test_cases = special_test_cases;
	}
	public String getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(String platform_id) {
		this.platform_id = platform_id;
	}
	public int getIteration() {
		return iteration;
	}
	public void setIteration(int iteration) {
		this.iteration = iteration;
	}
	public String getApp_version() {
		return app_version;
	}
	public void setApp_version(String app_version) {
		this.app_version = app_version;
	}
	public String getConviva_plugin_version() {
		return conviva_plugin_version;
	}
	public void setConviva_plugin_version(String conviva_plugin_version) {
		this.conviva_plugin_version = conviva_plugin_version;
	}
	
}
