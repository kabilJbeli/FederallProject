package com.emailSchedule.federalProject.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.User;
import com.emailSchedule.federalProject.repositories.UserRepository;

@Service
public class UserService implements IUserservice {

	public static final int MAX_FAILED_ATTEMPTS = 3;

	private static final long LOCK_TIME_DURATION = 24 * 60 * 60 * 1000; // 24 heurs
	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
			Pattern.CASE_INSENSITIVE);
	@Autowired
	UserRepository userRepository;

	@Override
	public List<User> getAllUsers() {
		List<User> usereList = userRepository.findAll();

		if (usereList.size() > 0) {
			return usereList;
		} else {
			return new ArrayList<User>();
		}
	}

	@Override
	public User getUserById(int id) throws Exception {
		return userRepository.findByidUser(id);
	}

	@Override
	public User createUser(User entity) throws Exception {
		return userRepository.save(entity);
	}

	@Override
	public User updateUser(User entity) throws Exception {
		User user = userRepository.findByidUser(entity.getIdUser());
		if (user != null) {
			return userRepository.save(entity);
		} else {
			throw new Exception("No the user record exist");
		}
	}

	@Override
	public void deleteUserById(Integer userId) throws Exception {
		userRepository.deleteById(userId);
	}

	@Override
	public User activateUser(int iduser) throws Exception {
		User user = getUserById(iduser);
		user.setValid(true);
		return updateUser(user);
	}

	@Override
	public User desactivateUser(int iduser) throws Exception {
		User user = getUserById(iduser);
		user.setValid(false);
		return updateUser(user);
	}

	@Override
	public User findUserBylogin(String user) throws Exception {
		return userRepository.findBylogin(user);
	}

	@Override
	public List<User> findUserLastName(String username) throws Exception {
		return userRepository.findBylastName(username);
	}

	public String getUserRoleDescription(int id) {
		return userRepository.getUserRoleDescription(id);

	}

	@Override
	public List<String> findUsersActivated() throws Exception {
		return userRepository.getUsersFromActivated();

	}

	@Override
	public List<String> getUsersFromDisabled() {
		return userRepository.getUsersFromDisabled();
	}

	@Override
	public void increaseFailedAttempts(User user) {
		int newFailAttempts = user.getFailedAttempt() + 1;
		userRepository.updateFailedAttempts(newFailAttempts, user.getLogin());
	}

	@Override
	public void resetFailedAttempts(String email) {
		userRepository.updateFailedAttempts(0, email);
	}

	@Override
	public void lock(User user) {
		user.setAccountNonLocked(false);
		user.setLockTime(new Date());

		userRepository.save(user);
	}

	@Override
	public boolean unlockWhenTimeExpired(User user) {
		long lockTimeInMillis = user.getLockTime().getTime();
		long currentTimeInMillis = System.currentTimeMillis();

		if (lockTimeInMillis + LOCK_TIME_DURATION < currentTimeInMillis) {
			user.setAccountNonLocked(true);
			user.setLockTime(null);
			user.setFailedAttempt(0);
			userRepository.save(user);

			return true;
		}

		return false;
	}

	public static boolean validate(String emailStr) {
		Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
		return matcher.find();
	}

	@Override
	public void updateUserr(User u, int id) {

		User user = userRepository.findByidUser(id);
		user.setFirstName(u.getFirstName());
		user.setLastName(u.getLastName());
		user.setTelNum(u.getTelNum());
		user.setAddress(u.getAddress());
		user.setMail(u.getMail());
		user.setLogin(u.getLogin());
		userRepository.save(user);

	}

	@Override
	public List<User> findUserSearch(String pattern) {
		return userRepository.findUserSearch(pattern);
	}

}
