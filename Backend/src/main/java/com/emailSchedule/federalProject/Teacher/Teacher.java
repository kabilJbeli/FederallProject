package com.emailSchedule.federalProject.Teacher;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

	@Column(name = "BIRTHDATE")
	private LocalDate BIRTHDATE;

	public Teacher() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Teacher(Integer cIN, String nAME, String lASTNAME, LocalDate bIRTHDATE) {
		super();
		CIN = cIN;
		NAME = nAME;
		LASTNAME = lASTNAME;
		BIRTHDATE = bIRTHDATE;
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

}
