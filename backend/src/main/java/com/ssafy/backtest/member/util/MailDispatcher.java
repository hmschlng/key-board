package com.ssafy.backtest.member.util;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.Random;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Component;

import com.ssafy.backtest.member.model.dto.Member;

@Component
public class MailDispatcher {
	private String SMTP_HOST = "smtp.naver.com";
	private int SMTP_PORT = 587;
	private Session session;
	private String senderId;
	private String senderPass;
	
	public MailDispatcher() throws Exception {
		this.senderId = "soulb9@naver.com";
        this.senderPass = "didos9430!A";
	}
	
	public String sendAuthMail(String addr) {
		String authCode = getAuthCode();
		try {
			Properties props = new Properties();
			
	        props.put("mail.smtp.host", SMTP_HOST);
	        props.put("mail.smtp.port", SMTP_PORT);
	        props.put("mail.smtp.auth", "true");
	        props.put("mail.smtp.ssl.trust", "smtp.naver.com");
			this.session = Session.getInstance(props, new javax.mail.Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(senderId, senderPass);
	            }
	        });
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(senderId, "KEY BOARD 운영팀", "UTF-8"));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(addr));
			message.setSubject("[KEY-BOARD] 메일 인증번호 확인");
			message.setText("인증 코드를 홈페이지에 입력하세요\n"
					+ "인증 코드 : "
					+ authCode
					);
			
			Transport.send(message);
			System.out.println("Send complete!!");
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return authCode;
	}
	
	private String getAuthCode() {
		Random rand = new Random();
		StringBuilder sb = new StringBuilder();
		// 랜덤 숫자로 이루어진 6자리 인증코드 생성
		for(int i = 0; i<6; i++) {
			sb.append(rand.nextInt(10));
		}
		return sb.toString();
	}
	
	private String getTempPassword() {
		Random rand = new Random();
		StringBuilder sb = new StringBuilder();
		// 랜덤 문자들로 이루어진 20자리 비밀번호 생성
		for(int i = 0; i<20; i++) {
			sb.append((char)(rand.nextInt(128 - 33) + 33));
		}
		return sb.toString();
	}
	public String sendPassChangeMail(String addr) {
		String tempPw = getTempPassword();
		try {
			Properties props = new Properties();
			
	        props.put("mail.smtp.host", SMTP_HOST);
	        props.put("mail.smtp.port", SMTP_PORT);
	        props.put("mail.smtp.auth", "true");
	        		
			this.session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(senderId, senderPass);
	            }
	        });
			
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(senderId,"KEY BOARD 운영팀","UTF-8"));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(addr));
			message.setSubject("[KEY-BOARD] 비밀번호 변경 메일입니다.");
			message.setText("임시 비밀번호는 [ " + tempPw + " ] 입니다. 이 비밀번호로 로그인하셔서 비밀번호를 변경해 주세요.");
			Transport.send(message);
			System.out.println("비밀번호 변경 메일 전송 완료!!");
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return tempPw; 
	}
	
}
