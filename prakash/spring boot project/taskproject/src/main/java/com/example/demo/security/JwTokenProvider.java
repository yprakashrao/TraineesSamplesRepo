package com.example.demo.security;

import java.util.Date;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwTokenProvider {

	
	public String generateToken(Authentication authentication) {
		String email=authentication.getName();
		Date currentDate=new Date();
		Date expireDate =new Date(currentDate.getTime()+3600000);
		
		String token=Jwts.builder()
				.setSubject(email)
				.setIssuedAt(currentDate)
				.setExpiration(expireDate)
				.signWith(SignatureAlgorithm.HS512, "JWTSecretKey")
				.compact();
		return token;
	}

public String getEmailFromToken(String token) {
	Claims claims=Jwts.parser().setSigningKey("JWTSecretKey")
			.parseClaimsJws(token).getBody();
return claims.getSubject();
}



}
