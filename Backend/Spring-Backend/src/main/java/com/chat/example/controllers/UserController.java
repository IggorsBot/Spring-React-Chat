package com.chat.example.controllers;

import com.chat.example.payload.request.UsernameRequest;
import com.chat.example.repository.UserRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;


@Controller
public class UserController {

    final
    UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @MessageMapping("/searchUser")
    @SendTo("/topic/users")
    public List<String> findUsersWithPartOfName(@RequestParam UsernameRequest username) {
        return userRepository.findUsersWithPartOfName(username.getUsername());
    }
}