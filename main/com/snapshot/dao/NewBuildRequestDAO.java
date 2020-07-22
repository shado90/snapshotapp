package com.snapshot.dao;
import java.util.List;

import org.bson.codecs.pojo.annotations.BsonId;
import org.bson.codecs.pojo.annotations.BsonProperty;
import org.bson.types.ObjectId;

public class NewBuildRequestDAO {
	
	@BsonId private ObjectId id ;
	@BsonProperty("platform_id") private String platform_id;
	@BsonProperty("build_submit_type") private String build_submit_type;
	@BsonProperty("account_name") private String account_name;
	@BsonProperty("file_path") private String file_path;
	@BsonProperty("build_url") private String build_url;
	@BsonProperty("password") private String password;
	@BsonProperty("next_action") private String next_action;
	@BsonProperty("instructions") private String instructions;
	@BsonProperty("requestor") private String requestor;
	@BsonProperty("metrics") private String metrics;
	@BsonProperty("env") private String env;
	@BsonProperty("build_launch_date") private String build_launch_date;
	@BsonProperty("app_version") private String app_version;
	@BsonProperty("emails") private String emails;
	@BsonProperty("eta") private String eta;
	@BsonProperty("comments") private List<QERequestComments> comments;
	@BsonProperty("player_device_info") private PlayerDeviceInfoDAO player_device_info;
	@BsonProperty("issues") private List<ResultIssuesDAO> issues;
	@BsonProperty("observations") private List<ResultObservationsDAO> observations;
	@BsonProperty("validated_date") private String validated_date;
	@BsonProperty("requested_date") private String requested_date;
	@BsonProperty("is_active") private String is_active;
	
	public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	public String getBuild_submit_type() {
		return build_submit_type;
	}
	public void setBuild_submit_type(String build_submit_type) {
		this.build_submit_type = build_submit_type;
	}
	public String getFile_path() {
		return file_path;
	}
	public void setFile_path(String file_path) {
		this.file_path = file_path;
	}
	public String getBuild_url() {
		return build_url;
	}
	public void setBuild_url(String build_url) {
		this.build_url = build_url;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getInstructions() {
		return instructions;
	}
	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}
	public String getMetrics() {
		return metrics;
	}
	public void setMetrics(String metrics) {
		this.metrics = metrics;
	}
	public String getEnv() {
		return env;
	}
	public void setEnv(String env) {
		this.env = env;
	}
	public String getBuild_launch_date() {
		return build_launch_date;
	}
	public void setBuild_launch_date(String build_launch_date) {
		this.build_launch_date = build_launch_date;
	}
	public String getApp_version() {
		return app_version;
	}
	public void setApp_version(String app_version) {
		this.app_version = app_version;
	}
	public String getEmails() {
		return emails;
	}
	public void setEmails(String emails) {
		this.emails = emails;
	}
	public String getEta() {
		return eta;
	}
	public void setEta(String eta) {
		this.eta = eta;
	}
	public List<QERequestComments> getComments() {
		return comments;
	}
	public void setComments(List<QERequestComments> comments) {
		this.comments = comments;
	}
	public PlayerDeviceInfoDAO getPlayer_device_info() {
		return player_device_info;
	}
	public void setPlayer_device_info(PlayerDeviceInfoDAO player_device_info) {
		this.player_device_info = player_device_info;
	}
	public List<ResultIssuesDAO> getIssues() {
		return issues;
	}
	public void setIssues(List<ResultIssuesDAO> issues) {
		this.issues = issues;
	}
	public List<ResultObservationsDAO> getObservations() {
		return observations;
	}
	public void setObservations(List<ResultObservationsDAO> observations) {
		this.observations = observations;
	}
	public String getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(String platform_id) {
		this.platform_id = platform_id;
	}
	public String getValidated_date() {
		return validated_date;
	}
	public void setValidated_date(String validated_date) {
		this.validated_date = validated_date;
	}
	public String getRequested_date() {
		return requested_date;
	}
	public void setRequested_date(String requested_date) {
		this.requested_date = requested_date;
	}
	public String getNext_action() {
		return next_action;
	}
	public void setNext_action(String next_action) {
		this.next_action = next_action;
	}
	public String getRequestor() {
		return requestor;
	}
	public void setRequestor(String requestor) {
		this.requestor = requestor;
	}
	public String getAccount_name() {
		return account_name;
	}
	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}
	public String getIs_active() {
		return is_active;
	}
	public void setIs_active(String is_active) {
		this.is_active = is_active;
	}
	
	
}
