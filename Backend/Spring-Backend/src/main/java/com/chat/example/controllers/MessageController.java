package com.chat.example.controllers;

import com.chat.example.domain.Message;
import com.chat.example.repository.MessageRepository;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MessageController {

    final
    MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @MessageMapping("/newMessage")
    @SendTo("/topic/activity")
    public Message change(Message message, Authentication a) {
        System.out.println(message);
        System.out.println(a.getName());
        return null;
    }
}