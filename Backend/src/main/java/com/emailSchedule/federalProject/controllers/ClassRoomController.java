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

import com.emailSchedule.federalProject.entities.ClassRoom;
import com.emailSchedule.federalProject.services.ClassRommService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/classroom")
public class ClassRoomController {

	@Autowired
	private ClassRommService service;

	@GetMapping("/all")
	public List<ClassRoom> getAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<ClassRoom> getClassRoomById(@PathVariable Integer id) {
		try {
			ClassRoom classRoom = service.getClassRoomById(id);
			return new ResponseEntity<ClassRoom>(classRoom, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<ClassRoom>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public void addClassRoom(@RequestBody ClassRoom classRoom) {
		service.addClassRoom(classRoom);
	}

	@PutMapping("/update/{id}")
	public void updateClassRoom(@RequestBody ClassRoom classRoom) {
		try {
			ClassRoom searchedClassRoom = service.getClassRoomById(classRoom.getClassroom_id());
			if (searchedClassRoom.getClassroom_id() != null) {
				service.updateClassRoom(classRoom);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateClassRoom(@PathVariable Integer id) {
		try {
			ClassRoom searchedClassRoom = service.getClassRoomById(id);
			if (searchedClassRoom.getClassroom_id() != null) {
				service.removeClassRoom(id);
			}
		} catch (NoSuchElementException e) {

		}
	}
}