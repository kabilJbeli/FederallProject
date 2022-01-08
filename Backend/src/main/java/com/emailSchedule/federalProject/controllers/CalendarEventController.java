package com.emailSchedule.federalProject.controllers;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.Groups;
import com.emailSchedule.federalProject.entities.Subject;
import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.entities.TeacherAvailability;
import com.emailSchedule.federalProject.models.EventRequestBody;
import com.emailSchedule.federalProject.services.CalendarEventService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/events")
public class CalendarEventController {
	@Autowired
	private CalendarEventService service;
	
	@PostMapping("/add")
	public void addClassRoom(@RequestBody EventRequestBody eventRequestBody) {
		
		List<Subject> subjects = eventRequestBody.getSubjects();
		List<Teacher> teachers = eventRequestBody.getTeachers();
		Groups group = eventRequestBody.getGroups();

		for (Subject subject : subjects) {
			CalendarEvent calendarEvent = new CalendarEvent();	
			
			calendarEvent.setSubject(subject);
			calendarEvent.setGroup(group);
			
			for(Teacher teacher : teachers) {
				if(group.getIsEveningClass() && teacher.getIsOpenForEveningClasses()) {
					for(TeacherAvailability  availability: teacher.getAvailability()){
					if(availability.getIsNotTaken()) {
						calendarEvent.setStart(availability.getTimeAvailability());
						LocalDateTime endTime = availability.getTimeAvailability().plusHours(3);
						calendarEvent.setEnd(endTime);
						return;
						}
					}					
				}else if(!group.getIsEveningClass() && !teacher.getIsOpenForEveningClasses()) {
					for(TeacherAvailability  availability: teacher.getAvailability()){
						if(availability.getIsNotTaken()) {
							calendarEvent.setStart(availability.getTimeAvailability());
							LocalDateTime endTime = availability.getTimeAvailability().plusHours(3);
							calendarEvent.setEnd(endTime);
							return;
							}
						}
				}
			}							
			
			service.generateCalendarEvent(calendarEvent);
			}
		
	}

}
