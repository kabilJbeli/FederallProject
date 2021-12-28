package com.emailSchedule.federalProject.controllers;

import java.util.Date;
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
import com.emailSchedule.federalProject.security.CustomLoginSuccessHandler;
import com.emailSchedule.federalProject.security.jwt.JwtUtils;
import com.emailSchedule.federalProject.services.IUserservice;
import com.emailSchedule.federalProject.services.UserService;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/User/Access")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	CustomLoginSuccessHandler customLoginSuccessHandler;
	@Autowired
	IUserservice iuserservice;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;


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