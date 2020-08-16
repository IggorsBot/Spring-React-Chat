package com.chat.example.controllers;

import com.chat.example.domain.Chat;
import com.chat.example.domain.User;
import com.chat.example.repository.UserRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.List;


@RestController
public class ChatController {

    final
    UserRepository userRepository;

    public ChatController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @MessageMapping("/conversationList")
    @SendTo("/topic/activity")
    public List<Chat> getChatByUsername(Principal principal) {
        User user = userRepository.findByUsername(principal.getName()).orElse(null);
        System.out.println("Test User" + user.getUserId());
        System.out.println("Test " + userRepository.findChatsByUserId(user.getUserId()));
        return null;
    }
}