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
public class Student {

	@Column(name = "STUDENT_ID")
	private Integer STUDENT_ID;

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

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(Integer cIN, String nAME, String lASTNAME, LocalDate bIRTHDATE,String eMAIL) {
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
	public Integer getSTUDENT_ID() {
		return STUDENT_ID;
	}

	public void setSTUDENT_ID(Integer sTUDENT_ID) {
		STUDENT_ID = sTUDENT_ID;
	}

}
