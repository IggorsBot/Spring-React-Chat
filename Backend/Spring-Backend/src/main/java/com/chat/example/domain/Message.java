package com.chat.example.domain;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long messageId;

    //    Id чата, в котором находиться сообщение
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "chat_id")
    private Chat chatId;

    //    Id пользователя, который создал сообщение
    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private User userId;


    //    Содержимое сообщения
    @Column(nullable = false)
    private String contect;

    @Column(updatable = false)
    private LocalDateTime creationDate;

    public Message() {

    }

    public Message(Chat chatId, User userId, String contect, LocalDateTime creationDate) {
        this.chatId = chatId;
        this.userId = userId;
        this.contect = contect;
        this.creationDate = creationDate;
    }

    public Long getMessageId() {
        return messageId;
    }

    public void setMessageId(Long messageId) {
        this.messageId = messageId;
    }

    public Chat getChatId() {
        return chatId;
    }

    public void setChatId(Chat chatId) {
        this.chatId = chatId;
    }

    public User getUserId() {
        return userId;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public String getContect() {
        return contect;
    }

    public void setContect(String contect) {
        this.contect = contect;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    @Override
    public String toString() {
        return "Message{" +
                "messageId=" + messageId +
                ", chatId=" + chatId +
                ", userId=" + userId +
                ", contect='" + contect + '\'' +
                ", creationDate=" + creationDate +
                '}';
    }
}
