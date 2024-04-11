package com.example.deafblindscot;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class DeafBlindScotController {

    @GetMapping("home")
    //@ResponseBody
    public String home() {
        return "home";
    }

    @GetMapping("learn")
    //@ResponseBody
    public String learn() {
        return "learn";
    }


}






