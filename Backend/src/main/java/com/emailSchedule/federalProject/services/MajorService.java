package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Major;
import com.emailSchedule.federalProject.repositories.MajorRepository;

@Service
public class MajorService {

	@Autowired
	private MajorRepository repository;

	public List<Major> findAll() {
		return repository.findAll();
	}

	public void addMajor(Major major) {
		repository.save(major);
	}

	public void removeMajor(Integer id) {
		repository.deleteById(id);
	}

	public Major getMajorById(Integer id) {
		return repository.getById(id);
	}

	public void updateMajor(Major major) {
		repository.save(major);
	}

}
