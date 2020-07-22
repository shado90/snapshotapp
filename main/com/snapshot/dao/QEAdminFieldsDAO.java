package com.snapshot.dao;

public class QEAdminFieldsDAO {
	
	private String _id;
	private String account_name;
	private String platform_name;
	private String build_submit_type;
	private String password;
	private String instructions;
	private String validation_state;
	private String metrics;
	
	public String get_id() {
		return _id;
	}
	public void set_id(String _id) {
		this._id = _id;
	}
	public String getAccount_name() {
		return account_name;
	}
	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}
	public String getPlatform_name() {
		return platform_name;
	}
	public void setPlatform_name(String platform_name) {
		this.platform_name = platform_name;
	}
	public String getBuild_submit_type() {
		return build_submit_type;
	}
	public void setBuild_submit_type(String build_submit_type) {
		this.build_submit_type = build_submit_type;
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
	public String getValidation_state() {
		return validation_state;
	}
	public void setValidation_state(String validation_state) {
		this.validation_state = validation_state;
	}
	public String getMetrics() {
		return metrics;
	}
	public void setMetrics(String metrics) {
		this.metrics = metrics;
	}
	
}
