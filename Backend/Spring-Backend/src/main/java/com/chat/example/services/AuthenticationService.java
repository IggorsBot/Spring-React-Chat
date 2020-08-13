package com.chat.example.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;

import static java.util.Collections.emptyList;

public class AuthenticationService {
    static final long EXPIRATIONTIME = 864_000_00;
    static final String SIGNINGKEY = "SecretKey";
    static final String PREFIX = "Bearer";


    static public String generateToken(String username) {
        String JwtToken = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS512, SIGNINGKEY)
                .compact();
        return JwtToken;
    }

    static public Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null) {
            String user = Jwts.parser()
                    .setSigningKey(SIGNINGKEY)
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();

            if (user != null)
                return new UsernamePasswordAuthenticationToken(user, null, emptyList());
        }
        return null;
    }
}
