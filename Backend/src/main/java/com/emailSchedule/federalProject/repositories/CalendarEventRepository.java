package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.Teacher;


public interface CalendarEventRepository extends JpaRepository<CalendarEvent, Integer> {
	public CalendarEvent findByteacher(Teacher teacher);

}


