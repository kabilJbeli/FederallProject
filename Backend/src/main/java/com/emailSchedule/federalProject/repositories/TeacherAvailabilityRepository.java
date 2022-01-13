package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.TeacherAvailability;

public interface TeacherAvailabilityRepository extends JpaRepository<TeacherAvailability, Integer> {

}