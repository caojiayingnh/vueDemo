package com.vuedemo_back.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class MainController {

    String weather[][] = {
            {"多云 11-18 °C", "晴 11-18 °C", "小雨 11-18 °C", "多云 11-18 °C", "阴 11-18 °C"},
            {"多云 6-18 °C", "阴 6-15 °C", "晴 4-18 °C", "小雨 8-20 °C", "多云 10-23 °C"},
            {"暴雨 12-20 °C", "晴 15-18 °C", "雨 11-14 °C", "晴 13-18 °C", "晴 13-18 °C"},
            {"晴 25-30 °C", "中雨 22-28 °C", "晴 27-30 °C", "阴 20-27 °C", "大风 26-30 °C"},
    };

    @RequestMapping("/weather")
    public String getWeather(int city, int day) {
        return weather[city][day];
    }

    @PostMapping(path="/ai")
    public String getAnswer(@RequestBody Map<String, String> questionBody) {
        String question = questionBody.get("question");
        StringBuilder stringBuilder = new StringBuilder(question);
        if (question.charAt(question.length() - 1) == '?' || question.charAt(question.length() - 1) == '？') {
            for (int i = 0; i < stringBuilder.length() - 1; i++) {
                if (stringBuilder.charAt(i) == '你') {
                    stringBuilder.setCharAt(i,'我');
                }else if (stringBuilder.charAt(i) == '我'){
                    stringBuilder.setCharAt(i,'你');
                }
            }
        }
        stringBuilder.setCharAt(stringBuilder.length()-1,'!');

        stringBuilder.delete(stringBuilder.length()-2, stringBuilder.length()-1);
        return stringBuilder.toString();
    }

}
