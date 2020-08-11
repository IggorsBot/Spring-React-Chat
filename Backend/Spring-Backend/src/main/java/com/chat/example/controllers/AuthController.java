package com.chat.example.controllers;

import com.chat.example.domain.Message;
import com.chat.example.domain.User;
import com.chat.example.payload.request.RegistrationRequest;
import com.chat.example.payload.response.MessageResponse;
import com.chat.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;


@RestController
public class AuthController {

    final
    BCryptPasswordEncoder passwordEncoder;

    final
    UserRepository userRepository;

    public AuthController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegistrationRequest registrationRequest) {

        if (userRepository.existsByUsername(registrationRequest.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(registrationRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse(("Error: Email is already in use!")));
        }

        User user = new User(
                registrationRequest.getUsername(),
                passwordEncoder.encode(registrationRequest.getPassword()),
                registrationRequest.getEmail()
        );

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully"));
    }
}
