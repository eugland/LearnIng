package com.udacity.jwdnd.c1.review;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.ListUtils;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

@Service
public class MessageService {
    List<String> messages;

    @PostConstruct
    public void postConstruct() {
        messages = new ArrayList<>(){{add("Hi"); add("Hello"); add("how are you");}};
    }

    public void addMessage(String message){
        this.messages.add(message);
    }

    public List<String> getMessages() {
        return Collections.unmodifiableList(messages);
    }



}
