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

import com.emailSchedule.federalProject.entities.Departement;
import com.emailSchedule.federalProject.entities.Teacher;
import com.emailSchedule.federalProject.services.DepartementServive;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping(value = "/departement")
public class DepartementController {

	@Autowired
	private DepartementServive service;

	@GetMapping("/findall")
	public List<Departement> getAll() {
		return service.findallDepartement();
	}

	@GetMapping("/find/{id}")
	public ResponseEntity<Departement> getDepartementsById(@PathVariable Integer id) {
		try {
			Departement dep = service.findDepartement(id);
			return new ResponseEntity<Departement>(dep, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Departement>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/create")
	public void createDepartements(@RequestBody Departement teacher) {
		service.createorupdateDepartement(teacher);
	}

	@PutMapping("/update")
	public void updateDepartements(@RequestBody Departement Departement) {
		try {
			Departement Departementfound = service.findDepartement(Departement.getDepartementid());
			if (Departementfound != null) {
				service.createorupdateDepartement(Departement);
			}
		} catch (NoSuchElementException e) {

		}
	}

	@DeleteMapping("/delete/{id}")
	public void updateTeacher(@PathVariable Integer id) {
		try {
			Departement searchedDepartement = service.findDepartement(id);
			if (searchedDepartement != null) {
				service.deleteDepartement(searchedDepartement);
			}
		} catch (NoSuchElementException e) {

		}
	}
	
	@GetMapping("/findheaddepartement/{id}")
	public ResponseEntity<Teacher> getHeaddepartement(@PathVariable Integer id) {
		try {
			Teacher teacher = service.findDepartement(id).getTeacher();
			return new ResponseEntity<Teacher>(teacher, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<Teacher>(HttpStatus.NOT_FOUND);
		}
	}
}