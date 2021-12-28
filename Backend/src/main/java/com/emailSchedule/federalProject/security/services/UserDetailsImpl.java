package com.emailSchedule.federalProject.security.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.emailSchedule.federalProject.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Component
public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;
	User user;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(User user,
			Collection<? extends GrantedAuthority> authorities) {
		this.user = user;
		this.authorities = authorities;
	}
	
	public UserDetailsImpl() {
	}

	public static UserDetailsImpl build(User user) {
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(user.getRole().getDescription()));

		return new UserDetailsImpl(user, 
				authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}
	
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	public User getUser () throws Exception {
		return user;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		try {
			return user.isValid();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user1 = (UserDetailsImpl) o;
		return Objects.equals(user, user1);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}
	
	

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getLogin();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
}
