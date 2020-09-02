package com.chat.example.entity;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_id")
    private Chat chat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false)
    private String text;

    @Column(updatable = false)
    private LocalDateTime creationDate;

    public Long getMessageId() {
        return id;
    }

    public Message setMessageId(Long messageId) {
        this.id = messageId;
        return this;
    }

    public Chat getChatId() {
        return chat;
    }

    public Message setChatId(Chat chatId) {
        this.chat = chat;
        return this;
    }

    public User getUserId() {
        return user;
    }

    public Message setUserId(User userId) {
        this.user = userId;
        return this;
    }

    public String getText() {
        return text;
    }

    public Message setText(String text) {
        this.text = text;
        return this;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public Message setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", creationDate=" + creationDate +
                '}';
    }
}
