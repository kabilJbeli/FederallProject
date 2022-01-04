package com.emailSchedule.federalProject.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
@Table(name="DEPARTEMENT")
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Departement implements Serializable {

	@Column(name = "IDDEPARTEMENT")
	private Integer departementid;

	@Column(name = "NAMEDEPARTEMENT")
	private String departementname;

	private Teacher teacher;
	
	public Departement() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getDepartementid() {
		return departementid;
	}

	public void setDepartementid(Integer departementid) {
		this.departementid = departementid;
	}

	public String getDepartementname() {
		return departementname;
	}

	public void setDepartementname(String departementname) {
		this.departementname = departementname;
	}
	
	@OneToOne
	@JoinColumn(name = "HEADDEP")
	public Teacher getTeacher() {
		return teacher;
	}

	
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	
	

}