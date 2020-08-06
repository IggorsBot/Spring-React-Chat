package com.chat.example.controllers;


import com.chat.example.config.jwt.JwtTokenUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

    final
    JwtTokenUtil jwtTokenUtil;

    public AuthController(JwtTokenUtil jwtTokenUtil) {
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(Authentication authentication) {
        return ResponseEntity.ok("Token " + jwtTokenUtil.generateJwtToken(authentication));
    }
}

