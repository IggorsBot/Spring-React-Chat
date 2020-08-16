package com.chat.example.repository;

import com.chat.example.domain.Chat;
import com.chat.example.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username) throws UsernameNotFoundException;

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Query("SELECT u.chats  FROM User u WHERE u.userId = :userId")
    Set<Chat> findChatsByUserId(@Param("userId") long userId);

    @Query("SELECT u.username FROM User u WHERE UPPER(u.username) LIKE CONCAT('%',UPPER(:username),'%')")
    List<String> findUsersWithPartOfName(@Param("username") String username);
}
