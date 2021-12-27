package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Student;
import com.emailSchedule.federalProject.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository repository;

	public List<Student> findAll() {
		return repository.findAll();
	}

	public void addStudent(Student student) {
		repository.save(student);
	}

	public void removeStudent(Integer id) {
		repository.deleteById(id);
	}

	public Student getStudentById(Integer id) {
		return repository.getById(id);
	}

	public void updateStudent(Student student) {
		repository.save(student);
	}

}
