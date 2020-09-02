package com.chat.example.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "message_status")
public class MessageStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "message_id")
    private Message messageId;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private List<User> userId;

    private boolean isRead;

    public Long getId() {
        return id;
    }

    public MessageStatus setMessageStatusId(Long messageStatusId) {
        this.id = id;
        return this;
    }

    public Message getMessageId() {
        return messageId;
    }

    public MessageStatus setMessageId(Message messageId) {
        this.messageId = messageId;
        return this;
    }

    public List<User> getUserId() {
        return userId;
    }

    public MessageStatus setUserId(List<User> userId) {
        this.userId = userId;
        return this;
    }

    public boolean isRead() {
        return isRead;
    }

    public MessageStatus setRead(boolean read) {
        isRead = read;
        return this;
    }
}
