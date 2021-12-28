package com.emailSchedule.federalProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.emailSchedule.federalProject.entities.User;
import com.emailSchedule.federalProject.payload.response.MessageResponse;
import com.emailSchedule.federalProject.services.IUserservice;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/User/Access")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	IUserservice iuserservice;

	@Autowired
	PasswordEncoder encoder;


	@PostMapping("/signup")
	@ResponseBody
	public ResponseEntity<?> createUser(@RequestBody User user) throws Exception {

		user.setPassword(encoder.encode(user.getPassword()));
		if (user.getRole() == null) {
			return ResponseEntity.badRequest()
					.body(new MessageResponse("Error: Could you please add a role for the new user!"));
		}
		user.setValid(true);
		user.setAccountNonLocked(true);
		user.setFailedAttempt(0);
		
		iuserservice.createUser(user);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

}