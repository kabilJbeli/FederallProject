package com.emailSchedule.federalProject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Major {

	@Column(name = "IDMAJOR")
	private Integer majorId;
	
	@Column(name = "MAJOR")
	private String majorType;

	
	public Major() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Major(Integer majorId, String majorType) {
		super();
		this.majorId = majorId;
		this.majorType = majorType;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getMajorId() {
		return majorId;
	}

	public void setMajorId(Integer majorId) {
		this.majorId = majorId;
	}

	public String getMajorType() {
		return majorType;
	}

	public void setMajorType(String majorType) {
		this.majorType = majorType;
	}
	
	
}
