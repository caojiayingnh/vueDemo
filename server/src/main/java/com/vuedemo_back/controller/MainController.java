package com.vuedemo_back.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping("/ask")
    public String get(String question) {
        StringBuilder stringBuilder = new StringBuilder(question);
        if (question.charAt(question.length() - 1) == '?' || question.charAt(question.length() - 1) == '？') {
            for (int i = 0; i < stringBuilder.length() - 1; i++) {
                if (stringBuilder.charAt(i) == '你') {
                    stringBuilder.setCharAt(i,'我');
                }else if (stringBuilder.charAt(i) == '我'){
                    stringBuilder.setCharAt(i,'你');
                }
            }
            stringBuilder.setCharAt(stringBuilder.length()-1,'。');
        }else {
            stringBuilder.setCharAt(stringBuilder.length()-1,'!');
        }
        stringBuilder.delete(stringBuilder.length()-2, stringBuilder.length()-1);
        return stringBuilder.toString();
    }

}
