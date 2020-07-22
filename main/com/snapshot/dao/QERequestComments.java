package com.snapshot.dao;

import java.time.LocalDateTime;

import org.bson.codecs.pojo.annotations.BsonProperty;

import com.mongodb.BasicDBObject;

public class QERequestComments{
	
	@BsonProperty("comment") private String comment;
	@BsonProperty("author") private String author;
	@BsonProperty("file_path") private String file_path;
	@BsonProperty("time") private String time;
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getFile_path() {
		return file_path;
	}
	public void setFile_path(String file_path) {
		this.file_path = file_path;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	

}
