package com.chat.example.domain;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="chat")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "chat_id")
    private Long chatId;

    private String name;

    @ManyToMany
    @JoinColumn(name = "user_id")
    private Collection<User> userId;

    public Chat() {}

    public Chat(String name, Collection<User> userId) {
        this.name = name;
        this.userId = userId;
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

    public Collection<User> getUserId() {
        return userId;
    }

    public void setUserId(Collection<User> userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Chat{" +
                "chatId=" + chatId +
                ", name='" + name + '\'' +
                ", userId=" + userId +
                '}';
    }
}
