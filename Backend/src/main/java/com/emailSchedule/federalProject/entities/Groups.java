package com.emailSchedule.federalProject.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Groups {

	@Column(name = "GROUPID")
	private Integer groupId;

	@Column(name = "GROUPNAME")
	private String groupname;

	@Column(name = "GROUPMAJORE")
	private String groupmajore;

	public Groups() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getGroupId() {
		return groupId;
	}

	public void setGroupId(Integer groupId) {
		this.groupId = groupId;
	}

	public String getGroupname() {
		return groupname;
	}

	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}

	public String getGroupmajore() {
		return groupmajore;
	}

	public void setGroupmajore(String groupmajore) {
		this.groupmajore = groupmajore;
	}


}
