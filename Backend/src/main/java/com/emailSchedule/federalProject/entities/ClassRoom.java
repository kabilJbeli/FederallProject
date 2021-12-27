package com.emailSchedule.federalProject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class ClassRoom {

	@Column(name = "CLASSROOM_ID")
	private Integer classroom_id;
	
	@Column(name = "CLASSROOM_NUMBER")
	private String classroom_number;
	
	@Column(name = "STAGE")
	private Integer stage;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getClassroom_id() {
		return classroom_id;
	}

	public void setClassroom_id(Integer classroom_id) {
		this.classroom_id = classroom_id;
	}

	public String getClassroom_number() {
		return classroom_number;
	}

	public void setClassroom_number(String classroom_number) {
		this.classroom_number = classroom_number;
	}

	public Integer getStage() {
		return stage;
	}

	public void setStage(Integer stage) {
		this.stage = stage;
	}

	public ClassRoom(Integer classroom_id, String classroom_number, Integer stage) {
		super();
		this.classroom_id = classroom_id;
		this.classroom_number = classroom_number;
		this.stage = stage;
	}

	public ClassRoom() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
