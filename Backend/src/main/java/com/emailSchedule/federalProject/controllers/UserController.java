package com.emailSchedule.federalProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.emailSchedule.federalProject.entities.User;
import com.emailSchedule.federalProject.services.IUserservice;
import com.fasterxml.jackson.annotation.JsonBackReference;


@RestController
@RequestMapping("/User/Service")
@CrossOrigin
public class UserController {

	@Autowired
	IUserservice iuserservice;

	@Autowired
	PasswordEncoder encoder;

	
	@JsonBackReference("")
	@GetMapping("/findall")
	public List<User> getAllUsers() {
		return iuserservice.getAllUsers();
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@GetMapping("/userbyid/{idUser}")
	public User getUserById(@PathVariable("idUser") int idUser) throws Exception {
		return iuserservice.getUserById(idUser);
	}

	
	@PreAuthorize("hasAuthority('Admin')")	
	@PutMapping("/UpdateUser")
	@ResponseBody
	public User updateUser(@RequestBody User user) throws Exception {
		User userinthedatabase = iuserservice.getUserById(user.getIdUser());
		if (!encoder.encode(user.getPassword()).equals(userinthedatabase.getPassword())) {
			user.setPassword(encoder.encode(user.getPassword()));
		}
		return iuserservice.updateUser(user);
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@DeleteMapping("/deleteUserById/{userId}")
	public void deleteUserById(@PathVariable("userId") Integer userId) throws Exception {
		iuserservice.deleteUserById(userId);
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@PutMapping("/activateUser/{iduser}")
	public User activateUser(@PathVariable("iduser") int iduser) throws Exception {
		return iuserservice.activateUser(iduser);
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@PutMapping("/desactivateUser/{iduser}")
	public User desactivateUser(@PathVariable("iduser") int iduser) throws Exception {
		return iuserservice.desactivateUser(iduser);
	}

	@PreAuthorize("hasAuthority('Admin')")
	@GetMapping("/findUserLastName/{username}")
	public List<User> findUserLastName(@PathVariable("username") String username) throws Exception {
		return iuserservice.findUserLastName(username);
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@GetMapping("/findUserBylogin/{username}")
	public User findUserBylogin(@PathVariable("username") String username) throws Exception {
		return iuserservice.findUserBylogin(username);
	}

	@PreAuthorize("hasAuthority('Admin')")
	@GetMapping("/findUserRole/{IdUser}")
	public String findUserRole(@PathVariable("IdUser") int IdUser) throws Exception {
		return iuserservice.getUserRoleDescription(IdUser);
	}

	@PreAuthorize("hasAuthority('Admin')")	
	@GetMapping("/findActivatedUser/")
	public List<String> findUserActivated() throws Exception {
		return iuserservice.findUsersActivated();
	}

	@PreAuthorize("hasAuthority('Admin')")	@GetMapping("/findDisabledUser/")
	public List<String> findUserDisabled() throws Exception {
		return iuserservice.getUsersFromDisabled();
	}
	
	@PreAuthorize("hasAuthority('Admin')")	
	@PutMapping("updateUserr/{id}")  
	public void updateUserr(@RequestBody User user, @PathVariable("id") int id) {
		iuserservice.updateUserr(user, id);
	}
	
	@PreAuthorize("hasAuthority('Admin')")
	@GetMapping("/findUserSearch/")
	public List<User> findUserSearch(@RequestParam("pattern")String pattern){
		return iuserservice.findUserSearch(pattern);
	}

}