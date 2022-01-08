package com.emailSchedule.federalProject.models;

import java.util.List;

import com.emailSchedule.federalProject.entities.Groups;
import com.emailSchedule.federalProject.entities.Subject;
import com.emailSchedule.federalProject.entities.Teacher;

public class EventRequestBody {
private List<Subject> subjects;
private Groups groups;	
private List<Teacher> teachers;

public EventRequestBody() {
	super();
	// TODO Auto-generated constructor stub
}
public EventRequestBody(List<Subject> subjects, Groups groups, List<Teacher> teachers) {
	super();
	this.subjects = subjects;
	this.groups = groups;
	this.teachers = teachers;
}
public List<Subject> getSubjects() {
	return subjects;
}
public void setSubjects(List<Subject> subjects) {
	this.subjects = subjects;
}
public Groups getGroups() {
	return groups;
}
public void setGroups(Groups groups) {
	this.groups = groups;
}
public List<Teacher> getTeachers() {
	return teachers;
}
public void setTeachers(List<Teacher> teachers) {
	this.teachers = teachers;
}	
}
