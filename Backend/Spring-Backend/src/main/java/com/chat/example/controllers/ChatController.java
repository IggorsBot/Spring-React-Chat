package com.chat.example.controllers;

import com.chat.example.entity.Chat;
import com.chat.example.entity.User;
import com.chat.example.payload.request.UsernameRequest;
import com.chat.example.payload.response.ChatResponse;
import com.chat.example.payload.response.MessageResponse;
import com.chat.example.repository.ChatRepository;
import com.chat.example.repository.UserRepository;
import com.chat.example.service.ChatService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.security.Principal;
import java.util.List;
import java.util.Set;


@RestController
public class ChatController {

    final
    UserRepository userRepository;

    final
    ChatRepository chatRepository;

    final
    ChatService chatService;

    public ChatController(UserRepository userRepository, ChatRepository chatRepository, ChatService chatService) {
        this.userRepository = userRepository;
        this.chatRepository = chatRepository;
        this.chatService = chatService;
    }

    @MessageMapping("/chatList")
    @SendTo("/topic/activity")
    public List<Chat> getChatsByUsername(Principal principal) {
        User user = userRepository.findByUsername(principal.getName());
        List<Chat> chats = userRepository.findChatsByUsername(user.getUsername());
        return chats;
    }

    @MessageMapping("/newChat")
    @SendTo("/topic/newChat")
    public ChatResponse createNewChat(Principal principal, @RequestBody UsernameRequest usernameRequest) {
        Chat chat = new Chat()
                .setName("")
                .addUser(userRepository.findByUsername(principal.getName()))
                .addUser(userRepository.findByUsername(usernameRequest.getUsername()));
        return new ChatResponse(chatService.createChat(chat));
    }
}