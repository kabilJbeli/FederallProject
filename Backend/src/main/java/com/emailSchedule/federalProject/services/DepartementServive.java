package com.emailSchedule.federalProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.Departement;
import com.emailSchedule.federalProject.repositories.DepartementRepository;
@Service
public class DepartementServive {
	
	@Autowired
	private DepartementRepository departementrepo;
	
	public void createorupdateDepartement (Departement Departement) {
		departementrepo.save(Departement);
	}
	
	public Departement findDepartement (int idDepartement) {
		return departementrepo.findById(idDepartement).get();
	}
	
	public List<Departement> findallDepartement () {
		return departementrepo.findAll();
	}
	
	public void deleteDepartement (Departement Departement) {
		departementrepo.delete(Departement);
	}
	
}
