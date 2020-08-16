package com.chat.example.config;

import com.chat.example.controllers.ChatController;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.messaging.SessionConnectedEvent;


@Configuration
public class StompConnectedEvent implements ApplicationListener<SessionConnectedEvent> {

    final
    ChatController chatController;

    public StompConnectedEvent(ChatController chatController) {
        this.chatController = chatController;
    }


    @Override
    public void onApplicationEvent(SessionConnectedEvent event) {
        chatController.getChatByUsername(event.getUser());
    }
}