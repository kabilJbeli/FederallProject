package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

}
