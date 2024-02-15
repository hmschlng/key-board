package com.ssafy.backtest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin
public class BacktestApplication {

	public static void main(String[] args) {
		SpringApplication.run(BacktestApplication.class, args);
	}

}
