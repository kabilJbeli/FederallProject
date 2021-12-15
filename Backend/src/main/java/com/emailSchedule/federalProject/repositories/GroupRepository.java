package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emailSchedule.federalProject.entities.Groups;


public interface GroupRepository extends JpaRepository<Groups, Integer> {

}
