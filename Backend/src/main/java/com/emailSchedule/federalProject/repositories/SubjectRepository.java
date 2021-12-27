package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.Subject;

public interface SubjectRepository extends JpaRepository<Subject, Integer> {

}
