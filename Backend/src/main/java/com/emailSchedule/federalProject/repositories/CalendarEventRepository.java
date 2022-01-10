package com.emailSchedule.federalProject.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.CalendarEvent;
import com.emailSchedule.federalProject.entities.ClassRoom;
import com.emailSchedule.federalProject.entities.Teacher;


public interface CalendarEventRepository extends JpaRepository<CalendarEvent, Integer> {
	public List<CalendarEvent> findByteacher(Teacher teacher);
	public List<CalendarEvent>  findByclassroom (ClassRoom classroom);

}


