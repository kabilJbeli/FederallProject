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

import com.emailSchedule.federalProject.entities.Subject;
import com.emailSchedule.federalProject.services.SubjectService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/subject")
public class SubjectController {

	@Autowired
	private SubjectService service;

	@GetMapping("/all")
	public List<Subject> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Subject> getSubjectById(@PathVariable Integer id) {
		try {
			Subject subject = service.getSubjectById(id);
			return new ResponseEntity<Subject>(subject, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Subject>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public void addSubject(@RequestBody Subject subject) {
		service.addSubject(subject);
	}

	@PutMapping("/update/{id}")
	public void updateSubject(@RequestBody Subject subject, @PathVariable Integer id) {
		try {
			Subject searchedSubject = service.getSubjectById(id);
			if (searchedSubject.getSUBJECT_ID() != null) {
				subject.setSUBJECT_ID(id);
				service.updateSubject(subject);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateSubject(@PathVariable Integer id) {
		try {
			Subject searchedSubject = service.getSubjectById(id);
			if (searchedSubject.getSUBJECT_ID() != null) {
				service.removeSubject(id);
			}
		} catch (NoSuchElementException e) {

		}
	}
}
