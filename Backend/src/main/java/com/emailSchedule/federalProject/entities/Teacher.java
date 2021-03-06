package com.emailSchedule.federalProject.entities;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Teacher {
	
	@Column(name = "TEACHER_ID")
	private Integer TEACHER_ID;

	@Column(name = "CIN")
	private Integer CIN;

	@Column(name = "NAME")
	private String NAME;

	@Column(name = "LASTNAME")
	private String LASTNAME;

	@Column(name = "EMAIL")
	private String EMAIL;	

	@Column(name = "BIRTHDATE")
	private LocalDate BIRTHDATE;
	
	private Boolean isOpenForEveningClasses;
	private Set<TeacherAvailability> availability;

	@OneToMany(mappedBy = "teacher", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	public Set<TeacherAvailability> getAvailability() {
		return availability;
	}

	public void setAvailability(Set<TeacherAvailability> availability) {
		this.availability = availability;
	}

	public Boolean getIsOpenForEveningClasses() {
		return isOpenForEveningClasses;
	}

	public void setIsOpenForEveningClasses(Boolean isOpenForEveningClasses) {
		this.isOpenForEveningClasses = isOpenForEveningClasses;
	}

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Teacher(Integer cIN, String nAME, String lASTNAME, LocalDate bIRTHDATE,String eMAIL) {
		super();
		CIN = cIN;
		NAME = nAME;
		LASTNAME = lASTNAME;
		BIRTHDATE = bIRTHDATE;
		EMAIL = eMAIL;
	}

	public String getEMAIL() {
		return EMAIL;
	}

	public void setEMAIL(String eMAIL) {
		EMAIL = eMAIL;
	}

	public Integer getCIN() {
		return CIN;
	}

	public void setCIN(Integer cIN) {
		CIN = cIN;
	}

	public String getNAME() {
		return NAME;
	}

	public void setNAME(String nAME) {
		NAME = nAME;
	}

	public String getLASTNAME() {
		return LASTNAME;
	}

	public void setLASTNAME(String lASTNAME) {
		LASTNAME = lASTNAME;
	}

	public LocalDate getBIRTHDATE() {
		return BIRTHDATE;
	}

	public void setBIRTHDATE(LocalDate bIRTHDATE) {
		BIRTHDATE = bIRTHDATE;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getTEACHER_ID() {
		return TEACHER_ID;
	}

	public void setTEACHER_ID(Integer tEACHER_ID) {
		TEACHER_ID = tEACHER_ID;
	}
	
	@ManyToMany
	Set <Subject> subject;
	
}
