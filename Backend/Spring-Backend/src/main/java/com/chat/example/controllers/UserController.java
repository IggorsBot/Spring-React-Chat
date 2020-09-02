package com.chat.example.controllers;

import com.chat.example.payload.request.UsernameRequest;
import com.chat.example.service.UserService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;


@Controller
public class UserController {

    final
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @MessageMapping("/searchUser")
    @SendTo("/topic/foundedUsers")
    public List<String> findUsersWithPartOfName(@RequestParam UsernameRequest username) {
        return userService.findUsersWithPartOfName(username.getUsername());
    }
}