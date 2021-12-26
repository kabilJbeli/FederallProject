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

import com.emailSchedule.federalProject.entities.Major;
import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.services.MajorService;
import com.emailSchedule.federalProject.services.TeacherService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/major")
public class MajorController {

	@Autowired
	private MajorService service;

	@GetMapping("/all")
	public List<Major> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Major> getMajorById(@PathVariable Integer id) {
		try {
			Major major = service.getMajorById(id);
			return new ResponseEntity<Major>(major, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Major>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public void addMajor(@RequestBody Major major) {
		service.addMajor(major);
	}

	@PutMapping("/update/{id}")
	public void updateMajor(@RequestBody Major major) {
		try {
			Major searchedMajor = service.getMajorById(major.getMajorId());
			if (searchedMajor.getMajorId() != null) {
				service.updateMajor(major);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateMajor(@PathVariable Integer id) {
		try {
			Major searchedMajor = service.getMajorById(id);
			if (searchedMajor.getMajorId() != null) {
				service.removeMajor(id);
			}
		} catch (NoSuchElementException e) {

		}
	}
}
