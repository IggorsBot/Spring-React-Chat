package com.chat.example.services;

import com.chat.example.domain.CustomUserDetails;
import com.chat.example.domain.User;
import com.chat.example.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.function.Supplier;


@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JpaUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Supplier<UsernameNotFoundException> s = () -> new UsernameNotFoundException(
                "Problem during authentication!"
        );

        User u = userRepository.findByUsername(username).orElseThrow(s);

        return new CustomUserDetails(u);
    }
}
