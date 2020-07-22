package com.snapshot.dao;

import org.bson.codecs.pojo.annotations.BsonProperty;

public class ResultIssuesDAO {
	
	@BsonProperty("issue_id") private String issue_id;
	@BsonProperty("metric") private String metric;
	@BsonProperty("impact") private String impact;
	@BsonProperty("summary") private String summary;
	@BsonProperty("impacted_metrics") private String impacted_metrics;
	@BsonProperty("description") private String description;
	
	public String getMetric() {
		return metric;
	}
	public void setMetric(String metric) {
		this.metric = metric;
	}
	public String getImpact() {
		return impact;
	}
	public void setImpact(String impact) {
		this.impact = impact;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getImpacted_metrics() {
		return impacted_metrics;
	}
	public void setImpacted_metrics(String impacted_metrics) {
		this.impacted_metrics = impacted_metrics;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getIssue_id() {
		return issue_id;
	}
	public void setIssue_id(String issue_id) {
		this.issue_id = issue_id;
	}
	
	
}
