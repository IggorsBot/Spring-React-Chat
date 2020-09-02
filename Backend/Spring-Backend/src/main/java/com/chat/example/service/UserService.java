package com.chat.example.service;

import com.chat.example.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<String> findUsersWithPartOfName(String username) {
        return userRepository.findUsersWithPartOfName(username);
    }
}
