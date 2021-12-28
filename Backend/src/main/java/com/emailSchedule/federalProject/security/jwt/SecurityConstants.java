package com.emailSchedule.federalProject.security.jwt;

public class SecurityConstants {
	public static final String SECRET ="PolytechInt";
	public static final long EXPIRATION_TIME= 864_000_000;//10 jours duree de valide d'un token
	public static final String TOKEN_PREFIX ="Bearer";
	public static final String HEADER_STRING= "Authorization";
}