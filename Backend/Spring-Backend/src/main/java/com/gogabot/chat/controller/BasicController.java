package com.gogabot.chat.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicController {

    @GetMapping("/welcome")
    @CrossOrigin("http://localhost:3000")
    public String welcome() {
        return "Hello World";
    }
}
