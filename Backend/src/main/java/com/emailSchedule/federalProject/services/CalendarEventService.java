package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.ClassRoom;
import com.emailSchedule.federalProject.repositories.CalendarEventRepository;


@Service
public class CalendarEventService {
	@Autowired
	private CalendarEventRepository repository;
	
	
	public void generateCalendarEvent (CalendarEvent calendarEvent) {
		repository.save(calendarEvent);
	}
	
	public List<CalendarEvent> findAll() {
		return repository.findAll();
	}

}
