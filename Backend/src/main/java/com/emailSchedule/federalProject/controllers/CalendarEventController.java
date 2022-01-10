package com.emailSchedule.federalProject.controllers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.ClassRoom;
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

	@PostMapping("/generate")
	public List<CalendarEvent> generateEvents(@RequestBody EventRequestBody eventRequestBody) {

		List<Subject> subjects = eventRequestBody.getSubjects();
		Set<Groups> groups = eventRequestBody.getGroups();
		List<CalendarEvent> calendarEvents = new ArrayList<CalendarEvent>();
		for (Groups group : groups) {
			for (Subject subject : subjects) {
				CalendarEvent calendarEvent = new CalendarEvent();
				Set<Teacher> teachers = subject.getTeacher();
				for (Teacher teacher : teachers) {
					boolean teach = service.thisteachgavecourse(teacher, subject, group);
					calendarEvent.setSubject(subject);
					calendarEvent.setGroup(groups);
					if (teach)
						calendarEvent.setTeacher(teacher);
					if (group.getIsEveningClass() && teacher.getIsOpenForEveningClasses()) {
						for (TeacherAvailability availability : teacher.getAvailability()) {
							if (availability.getIsNotTaken()) {
								if (calendarEvent.getTeacher() != null)
									calendarEvent.setTeacher(teacher);
								calendarEvent.setStart(availability.getTimeAvailability());
								LocalDateTime endTime = availability.getTimeAvailability().plusHours(3);
								calendarEvent.setEnd(endTime);
								ClassRoom classroom = service.getavailableClassRoom(availability.getTimeAvailability(), endTime);
								calendarEvent.setClassroom(classroom);
							}
						}
					} else if (!group.getIsEveningClass()) {
						for (TeacherAvailability availability : teacher.getAvailability()) {
							if (availability.getIsNotTaken()) {
								if (calendarEvent.getTeacher() != null)
									calendarEvent.setTeacher(teacher);
								
								calendarEvent.setStart(availability.getTimeAvailability());
								LocalDateTime endTime = availability.getTimeAvailability().plusHours(3);
								calendarEvent.setEnd(endTime);
								ClassRoom classroom = service.getavailableClassRoom(availability.getTimeAvailability(), endTime);
								calendarEvent.setClassroom(classroom);
							}
						}
					}
				}
				calendarEvents.add(calendarEvent);
				service.generateCalendarEvent(calendarEvent);
			}
		}
		return calendarEvents;

	}

}
