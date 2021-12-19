package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.repositories.TeacherRepository;

@Service
public class TeacherService {

	@Autowired
	private TeacherRepository repository;

	public List<Teacher> findAll() {
		return repository.findAll();
	}

	public void addTeacher(Teacher teacher) {
		repository.save(teacher);
	}

	public void removeTeacher(Integer id) {
		repository.deleteById(id);
	}

	public Teacher getTeacherById(Integer id) {
		return repository.getById(id);
	}

	public void updateTeacher(Teacher teacher) {
		repository.save(teacher);
	}

}
