package com.vuedemo_back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MainController {

    String weather[][] = {
            {"晴", "晴", "晴", "晴", "晴"},
            {"晴", "晴", "晴", "晴", "晴"},
            {"晴", "晴", "雨", "晴", "晴"},
            {"晴", "晴", "晴", "阴", "晴"},
    };

    @RequestMapping("/weather")
    public String get(int city, int day) {
        return weather[city][day];
    }

}
