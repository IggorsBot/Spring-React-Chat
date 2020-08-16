package com.chat.example.payload.response;

import java.util.List;

public class UsernamesResponse {
    private List<String> usernames;

    public UsernamesResponse(List<String> usernames) {
        this.usernames = usernames;
    }

    public List<String> getUsernames() {
        return usernames;
    }

    public void setUsernames(List<String> usernames) {
        this.usernames = usernames;
    }
}
