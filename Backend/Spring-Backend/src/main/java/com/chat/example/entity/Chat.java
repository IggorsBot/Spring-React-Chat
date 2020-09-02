package com.chat.example.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="chat")
public class Chat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "chats")
    private Set<User> users;

    public Chat addUser(User user) {
        this.users.add(user);
        user.addChat(this);
        return this;
    }

    public Long getId() {
        return id;
    }

    public Chat setId(Long chatId) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Chat setName(String name) {
        this.name = name;
        return this;
    }

    public Set<User> getUsers() {
        return users;
    }

    public Chat setUsers(Set<User> users) {
        this.users = users;
        return this;
    }

    @Override
    public String toString() {
        return "Chat{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
