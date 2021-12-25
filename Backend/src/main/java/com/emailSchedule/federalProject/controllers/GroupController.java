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

import com.emailSchedule.federalProject.entities.Groups;
import com.emailSchedule.federalProject.services.GroupServive;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/groups")
public class GroupController {

	@Autowired
	private GroupServive service;

	@GetMapping("/findall")
	public List<Groups> getAll() {
		return service.findallgroup();
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Groups> getGroupsById(@PathVariable Integer id) {
		try {
			Groups teacher = service.findgroup(id);
			return new ResponseEntity<Groups>(teacher, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Groups>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/create")
	public void createGroups(@RequestBody Groups teacher) {
		service.createorupdategroup(teacher);
	}

	@PutMapping("/update")
	public void updateGroups(@RequestBody Groups group) {
		try {
			Groups groupfound = service.findgroup(group.getGroupId());
			if (groupfound != null) {
				service.createorupdategroup(group);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateTeacher(@PathVariable Integer id) {
		try {
			Groups searchedGroup = service.findgroup(id);
			if (searchedGroup != null) {
				service.deletegroup(searchedGroup);
			}
		} catch (NoSuchElementException e) {

		}
	}
}