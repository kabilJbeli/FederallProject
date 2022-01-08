package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.CalendarEvent;


public interface CalendarEventRepository extends JpaRepository<CalendarEvent, Integer> {

}


