package com.emailSchedule.federalProject.payload.response;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private String username;
	private String roles;

	public JwtResponse(String accessToken, String username, String role) {
		this.token = accessToken;
		this.username = username;
		this.roles = role;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRole() {
		return roles;
	}
}
