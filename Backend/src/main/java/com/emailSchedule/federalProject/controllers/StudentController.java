package com.emailSchedule.federalProject.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emailSchedule.federalProject.entities.Student;
import com.emailSchedule.federalProject.services.StudentService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/student")
public class StudentController {

	@Autowired
	private StudentService service;

	@GetMapping("/all")
	public List<Student> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
		try {
			Student student = service.getStudentById(id);
			return new ResponseEntity<Student>(student, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public void addStudent(@RequestBody Student student) {
		service.addStudent(student);
	}

	@PutMapping("/update/{id}")
	public void updateStudent(@RequestBody Student student, @PathVariable Integer id) {
		try {
			Student searchedStudent = service.getStudentById(id);
			if (searchedStudent.getSTUDENT_ID() != null) {
				student.setSTUDENT_ID(id);
				service.updateStudent(student);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateStudent(@PathVariable Integer id) {
		try {
			Student searchedStudent = service.getStudentById(id);
			if (searchedStudent.getSTUDENT_ID() != null) {
				service.removeStudent(id);
			}
		} catch (NoSuchElementException e) {

		}
	}
}
