package com.chat.example.controllers;

import com.chat.example.domain.Chat;
import com.chat.example.domain.User;
import com.chat.example.payload.request.UsernameRequest;
import com.chat.example.payload.response.ChatResponse;
import com.chat.example.repository.ChatRepository;
import com.chat.example.repository.UserRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RestController
public class ChatController {

    final
    UserRepository userRepository;

    final
    ChatRepository chatRepository;

    public ChatController(UserRepository userRepository, ChatRepository chatRepository) {
        this.userRepository = userRepository;
        this.chatRepository = chatRepository;
    }

    @MessageMapping("/chatList")
    @SendTo("/topic/activity")
    public List<Chat> getChatsByUsername(Principal principal) {
        User user = userRepository.findByUsername(principal.getName()).orElse(null);
        return null;
    }

    @MessageMapping("/newChat")
    @SendTo("/topic/newChat")
    public ChatResponse createNewChat(Principal principal, @RequestBody UsernameRequest usernameRequest) {
        List<User> users = new ArrayList<User>();
        users.add(userRepository.findByUsername(principal.getName()).orElse(null));
        users.add(userRepository.findByUsername(usernameRequest.getUsername()).orElse(null));
        return new ChatResponse(chatRepository.save(new Chat("", users)));
    }
}