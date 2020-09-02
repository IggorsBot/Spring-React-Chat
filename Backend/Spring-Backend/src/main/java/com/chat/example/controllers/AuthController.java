package com.chat.example.controllers;

import com.chat.example.payload.request.LoginRequest;
import com.chat.example.service.AuthenticationProviderService;
import com.chat.example.service.AuthenticationService;
import com.chat.example.entity.User;
import com.chat.example.payload.request.RegistrationRequest;
import com.chat.example.payload.response.MessageResponse;
import com.chat.example.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


@RestController
@RequestMapping("/api/v0")
@CrossOrigin(origins = {"*"})
public class AuthController {
    static final String PREFIX = "Bearer";

    final
    AuthenticationProviderService authenticationProvider;

    final
    BCryptPasswordEncoder passwordEncoder;

    final
    UserRepository userRepository;

    public AuthController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder, AuthenticationProviderService authenticationProvider) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationProvider = authenticationProvider;
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegistrationRequest registrationRequest, HttpServletResponse response) {

        if (userRepository.existsByUsername(registrationRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(registrationRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse(("Error: Email is already in use!")));
        }

        User user = new User(
                registrationRequest.getUsername(),
                passwordEncoder.encode(registrationRequest.getPassword()),
                registrationRequest.getEmail(),
                null
        );

        userRepository.save(user);

        response.addHeader("Authorization", PREFIX + " " + AuthenticationService.generateToken(user.getUsername()));
        response.addHeader("Access-Control-Expose-Headers", "Authorization");

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        try {
            Authentication authentication = authenticationProvider.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())

            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

        } catch (AuthenticationException authenticationException) {
            return ResponseEntity.badRequest().body(new MessageResponse(("Error: Authentication failed!")));
        }

        response.addHeader("Authorization", PREFIX + " " + AuthenticationService.generateToken(loginRequest.getUsername()));
        response.addHeader("Access-Control-Expose-Headers", "Authorization");

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }
}
