package com.emailSchedule.federalProject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.emailSchedule.federalProject.entities.User;

import java.util.List;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findBylogin(String userName);
    List<User> findBylastName(String userName);
	User findByidUser(int idUser);
	
	@Query("SELECT r.description FROM User u INNER JOIN Role r on (u.role.id = r.id) where  u.id =:id")
	public String getUserRoleDescription(@Param("id")int id);
	
	@Query("SELECT CONCAT(u.firstName,CONCAT(' ',u.lastName)) FROM User u where  u.valid =TRUE")
	public List<String> getUsersFromActivated();
	
	@Query("SELECT CONCAT(u.firstName,CONCAT(' ',u.lastName)) FROM User u where  u.valid =FALSE")
	public List<String> getUsersFromDisabled();
	
	@Query("UPDATE User u SET u.failedAttempt = ?1 WHERE u.login = ?2")
    @Modifying
    public void updateFailedAttempts(int failAttempts, String login);
	User findUserByresettoken(String login);
	
	@Query("SELECT u FROM User u WHERE u.firstName LIKE %?1% OR u.login LIKE %?1% ")
	List<User> findUserSearch(String pattern);
}



