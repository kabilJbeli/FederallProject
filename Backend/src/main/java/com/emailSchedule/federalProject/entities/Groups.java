package com.emailSchedule.federalProject.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
@Table(name="groupprojet")
public class Groups {

	@Column(name = "IDGROUP")
	private Integer groupId;

	@Column(name = "NAMEGROUP")
	private String groupname;

	@Column(name = "GROUPMAJOR")
	
	private Major groupmajore;

	public Groups() {
		super();
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

	@ManyToOne
	public Major getGroupmajore() {
		return groupmajore;
	}

	public void setGroupmajore(Major groupmajore) {
		this.groupmajore = groupmajore;
	}

	@ManyToMany(mappedBy="subject")
	@JoinTable(name = "group_subject",
            joinColumns = @JoinColumn(name = "IDGROUP"),
            inverseJoinColumns = @JoinColumn(name = "SUBJECT_ID"))
	Set <Subject> subject;
	
	@OneToMany(mappedBy="groupprojet")
	private Set<Student> student;

}
