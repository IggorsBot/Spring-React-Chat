package com.chat.example.payload.response;

import com.chat.example.domain.Chat;


public class ChatResponse {
    private Long chatId;
    private String name;

    public ChatResponse(Chat chat) {
        this.chatId = chat.getChatId();
        this.name = chat.getName();
    }

    public Long getChatId() {
        return chatId;
    }

    public void setChatId(Long chatId) {
        this.chatId = chatId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
