package com.emailSchedule.federalProject.entities;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class CalendarEvent implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2400307436219931777L;
	@Column(name = "ALLDAY")
	private Boolean allDay;
	@Column(name = "DESCRIPTION")
	private String description;
	@Column(name = "TITLE")
	private String title;

	@Column(name = "EVENTID")
	private Integer id;
	@Column(name = "ENDDATE")
	private LocalDateTime end;
	@Column(name = "STARTDATE")
	private LocalDateTime start;


	private Subject subject;
	private Set<Groups> group;
	private Teacher teacher;
	
	@ManyToOne
	public ClassRoom getClassroom() {
		return classroom;
	}

	public void setClassroom(ClassRoom classroom) {
		this.classroom = classroom;
	}

	private ClassRoom classroom;

	public CalendarEvent() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CalendarEvent(String description, String title, Integer id, LocalDateTime end, LocalDateTime start,
			Subject subject, Set<Groups> group, Teacher teacher) {
		super();
		this.description = description;
		this.title = title;
		this.id = id;
		this.end = end;
		this.start = start;
		this.subject = subject;
		this.group = group;
		this.teacher = teacher;
	}

	public Boolean getAllDay() {
		return allDay;
	}

	public void setAllDay(Boolean allDay) {
		this.allDay = allDay;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getEnd() {
		return end;
	}

	public void setEnd(LocalDateTime end) {
		this.end = end;
	}

	public LocalDateTime getStart() {
		return start;
	}

	public void setStart(LocalDateTime start) {
		this.start = start;
	}

	@OneToOne
	public Subject getSubject() {
		return subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	@ManyToMany
	public Set<Groups> getGroup() {
		return group;
	}

	public void setGroup(Set<Groups> group) {
		this.group = group;
	}

	@OneToOne
	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

}
