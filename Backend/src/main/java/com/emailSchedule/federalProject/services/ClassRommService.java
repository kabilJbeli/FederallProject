package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.ClassRoom;
import com.emailSchedule.federalProject.entities.Major;
import com.emailSchedule.federalProject.repositories.ClassRoomRepository;

@Service
public class ClassRommService {

	@Autowired
	private ClassRoomRepository repository;

	public List<ClassRoom> findAll() {
		return repository.findAll();
	}

	public void addClassRoom(ClassRoom classRoom) {
		repository.save(classRoom);
	}

	public void removeClassRoom(Integer id) {
		repository.deleteById(id);
	}

	public ClassRoom getClassRoomById(Integer id) {
		return repository.getById(id);
	}

	public void updateClassRoom(ClassRoom classRoom) {
		repository.save(classRoom);
	}

}