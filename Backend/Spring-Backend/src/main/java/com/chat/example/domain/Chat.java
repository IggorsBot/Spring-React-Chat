package com.chat.example.domain;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name="chat")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "chat_id")
    private Long chatId;                           // id чата

    private String name;                            //    name - заголовок чата, его название

    @ManyToMany
    @JoinColumn(name = "user_id")
    private Collection<User> userId;                   //    user_id - id пользователя, находящегося в чате

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
}
