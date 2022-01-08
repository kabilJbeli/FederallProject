package com.emailSchedule.federalProject.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Subject {

	@Column(name = "SUBJECT_ID")
	private Integer SUBJECT_ID;
	
	@Column(name = "SUBJECT_NAME")
	private String SUBJECT_NAME;

	@Column(name = "CREDIT")
	private Float CREDIT;
	

	@Column(name = "COURSE_LOAD")
	private Integer COURSE_LOAD;
	
	@ManyToMany
	public Set<Teacher> getTeacher() {
		return teacher;
	}

	public void setTeacher(Set<Teacher> teacher) {
		this.teacher = teacher;
	}

	@ManyToMany
	public Set<Groups> getGroup() {
		return group;
	}

	public void setGroup(Set<Groups> groups) {
		this.group = groups;
	}

	private Set <Teacher> teacher;
	
	private Set <Groups> group;
	
	public Subject() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Subject(Integer SUBJECT_ID, String SUBJECT_NAME, Float CREDIT, Integer COURSE_LOAD) {
		super();
		this.SUBJECT_ID = SUBJECT_ID;
		this.SUBJECT_NAME = SUBJECT_NAME;
		this.CREDIT = CREDIT;
		this.COURSE_LOAD = COURSE_LOAD;
	}

	public String getSUBJECT_NAME() {
		return SUBJECT_NAME;
	}

	public void setSUBJECT_NAME(String SUBJECT_NAME) {
		this.SUBJECT_NAME = SUBJECT_NAME;
	}
	
	public Float getCREDIT() {
		return CREDIT;
	}

	public void setCOURSE_LOAD(Integer COURSE_LOAD) {
		this.COURSE_LOAD = COURSE_LOAD;
	}
	
	public Integer getCOURSE_LOAD() {
		return COURSE_LOAD;
	}

	public void setCREDIT(Float CREDIT) {
		this.CREDIT = CREDIT;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getSUBJECT_ID() {
		return SUBJECT_ID;
	}

	public void setSUBJECT_ID(Integer SUBJECT_ID) {
		this.SUBJECT_ID = SUBJECT_ID;
	}
	
}
