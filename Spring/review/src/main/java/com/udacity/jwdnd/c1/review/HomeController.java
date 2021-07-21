package com.udacity.jwdnd.c1.review;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.Instant;
import java.util.List;

@Controller
public class HomeController {
    MessageService ms;

    public HomeController(MessageService messageService){
        ms = messageService;

    }

    @GetMapping("/home")
    public String getHomePage(@ModelAttribute("newMessage") MessageForm newMessage,  Model model) {
        String mewMessage = (String) model.getAttribute("mewMessage");
        model.addAttribute("greetings", ms.getMessages());
        return "home";
    }

    @PostMapping("/home")
    public String postHomePage(@ModelAttribute("newMessage") MessageForm newMessage,  Model model) {
        ms.addMessage(newMessage.getText());
        newMessage.setText("");
        model.addAttribute("greetings", ms.getMessages());
        return "home";
    }

}
