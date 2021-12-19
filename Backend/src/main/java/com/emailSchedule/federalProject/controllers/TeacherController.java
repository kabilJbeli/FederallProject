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

import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.services.TeacherService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/teacher")
public class TeacherController {

	@Autowired
	private TeacherService service;

	@GetMapping("/all")
	public List<Teacher> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Teacher> getTeacherById(@PathVariable Integer id) {
		try {
			Teacher teacher = service.getTeacherById(id);
			return new ResponseEntity<Teacher>(teacher, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Teacher>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public void addTeacher(@RequestBody Teacher teacher) {
		service.addTeacher(teacher);
	}

	@PutMapping("/update/{id}")
	public void updateTeacher(@RequestBody Teacher teacher, @PathVariable Integer id) {
		try {
			Teacher searchedTeacher = service.getTeacherById(id);
			if (searchedTeacher.getTEACHER_ID() != null) {
				teacher.setTEACHER_ID(id);
				service.updateTeacher(teacher);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateTeacher(@PathVariable Integer id) {
		try {
			Teacher searchedTeacher = service.getTeacherById(id);
			if (searchedTeacher.getTEACHER_ID() != null) {
				service.removeTeacher(id);
			}
		} catch (NoSuchElementException e) {

		}
	}
}
