package com.chat.example.domain;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "message_status")
public class MessageStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long messageStatusId;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "message_id")
    private Message messageId;                           // id сообщения

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private List<User> userId;                              // id пользователя, который должен прочитать сообщение

    private boolean isRead;                           // прочитано ли сообщение

    public MessageStatus() {

    }

    public MessageStatus(Message messageId, List<User> userId, boolean isRead) {
        this.messageId = messageId;
        this.userId = userId;
        this.isRead = isRead;
    }

    public Long getMessageStatusId() {
        return messageStatusId;
    }

    public void setMessageStatusId(Long messageStatusId) {
        this.messageStatusId = messageStatusId;
    }

    public Message getMessageId() {
        return messageId;
    }

    public void setMessageId(Message messageId) {
        this.messageId = messageId;
    }

    public List<User> getUserId() {
        return userId;
    }

    public void setUserId(List<User> userId) {
        this.userId = userId;
    }

    public boolean isRead() {
        return isRead;
    }

    public void setRead(boolean read) {
        isRead = read;
    }
}
