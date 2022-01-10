package com.emailSchedule.federalProject.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.ClassRoom;
import com.emailSchedule.federalProject.entities.Groups;
import com.emailSchedule.federalProject.entities.Subject;
import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.repositories.CalendarEventRepository;


@Service
public class CalendarEventService {
	@Autowired
	private CalendarEventRepository repository;
	
	@Autowired
	public ClassRommService classRommService;
	
	
	public void generateCalendarEvent (CalendarEvent calendarEvent) {
		repository.save(calendarEvent);
	}
	
	public List<CalendarEvent> findAll() {
		return repository.findAll();
	}
	
	public boolean thisteachgavecourse(Teacher teacher, Subject subject, Groups group){
		List<CalendarEvent> calendarEvents = repository.findByteacher(teacher);
		if (!calendarEvents.isEmpty()) {
			for (CalendarEvent calendarEvent:calendarEvents) {
				Set<Groups> groups = calendarEvent.getGroup();
				Subject subjec = calendarEvent.getSubject();
				for (Groups grou:groups){
					if (group.equals(grou) && subjec.equals(subject))
					 return true;
					
				}
			}
		}
		return false;	
	}
	
	public boolean findavailableclassroom(ClassRoom classroom, LocalDateTime start, LocalDateTime end) {
		List<CalendarEvent> calendarEvents = repository.findByclassroom(classroom);
		for (CalendarEvent calendarEvent : calendarEvents) {
			if (start.isAfter(calendarEvent.getStart()) || start.isBefore(calendarEvent.getEnd())){
				return false;
			}
		}
		return true;
		
	}
	
	public ClassRoom getavailableClassRoom(LocalDateTime start, LocalDateTime end) {
		List<ClassRoom> classrooms = classRommService.findAll();
		for (ClassRoom classRoom: classrooms) {
			if (findavailableclassroom(classRoom, start, end)) {
				return classRoom;
			}
		}
		return null;
		
	}

}
