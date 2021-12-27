package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Subject;
import com.emailSchedule.federalProject.repositories.SubjectRepository;

@Service
public class SubjectService {

	@Autowired
	private SubjectRepository repository;

	public List<Subject> findAll() {
		return repository.findAll();
	}

	public void addSubject(Subject subject) {
		repository.save(subject);
	}

	public void removeSubject(Integer id) {
		repository.deleteById(id);
	}

	public Subject getSubjectById(Integer id) {
		return repository.getById(id);
	}

	public void updateSubject(Subject subject) {
		repository.save(subject);
	}

}
