package com.chat.example.config.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;

import java.util.Date;

public class JavaUtil {
    @Value("{jwtSecret}")
    private String jwtSecret;

    @Value("#{new Integer('${jwtExpirationMs}')}")
    private int jwtExpirationMs;


    public String generateJwtToken(Authentication authentication) {
        String token = Jwts.builder()
                .setSubject((authentication.getName()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();

        return token;
    }
}
