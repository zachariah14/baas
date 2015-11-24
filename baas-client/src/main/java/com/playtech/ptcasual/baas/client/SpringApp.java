package com.playtech.ptcasual.baas.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class SpringApp {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(SpringApp.class);
        app.setShowBanner(false);
        app.run(args);
    }
}
