package com.chat.example.service;

import com.chat.example.entity.Chat;
import com.chat.example.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatService {

    final ChatRepository chatRepository;

    public ChatService(ChatRepository chatRepository) {
        this.chatRepository = chatRepository;
    }
    public Chat createChat(Chat chat) {
        return chatRepository.save(chat);
    }
}
