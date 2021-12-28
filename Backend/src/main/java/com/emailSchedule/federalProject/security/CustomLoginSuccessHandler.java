package com.emailSchedule.federalProject.security;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.emailSchedule.federalProject.entities.User;
import com.emailSchedule.federalProject.services.IUserservice;
import com.emailSchedule.federalProject.services.UserService;
@Component
public class CustomLoginSuccessHandler {
	
	@Autowired
	PasswordEncoder encoder;
    @Autowired
    private IUserservice userService;
    @Transactional
    public String onAuthenticationSuccess(String username, String password) throws Exception {
    	User user =  userService.findUserBylogin(username);
    	if (user==null)
    		return "User unfound";
    	else if (encoder.matches(password, user.getPassword())) {
            if (user.getFailedAttempt() > 0) {
                userService.resetFailedAttempts(user.getLogin());
            }
    		return "";
    	}
        if (user.isValid() && user.isAccountNonLocked()) {
            if (user.getFailedAttempt() < UserService.MAX_FAILED_ATTEMPTS - 1) {
                userService.increaseFailedAttempts(user);
                return "Password wrong";
            } else {
                userService.lock(user);
                return "Blocked user";
            }
        } else if (!user.isAccountNonLocked()) {
            if (userService.unlockWhenTimeExpired(user)) {
            	return "User already blocked";
            }
        }
        return "User or password wrong";
    }
}