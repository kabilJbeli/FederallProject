package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Groups;
import com.emailSchedule.federalProject.repositories.GroupRepository;
@Service
public class GroupService {
	
	@Autowired
	private GroupRepository grouprepo;
	
	public void createorupdategroup (Groups group) {
		grouprepo.save(group);
	}
	
	public Groups findgroup (int idgroup) {
		return grouprepo.findById(idgroup).get();
	}
	
	public List<Groups> findallgroup () {
		return grouprepo.findAll();
	}
	
	public void deletegroup (Groups group) {
		grouprepo.delete(group);
	}
	
}
