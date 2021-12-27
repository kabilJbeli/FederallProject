package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
