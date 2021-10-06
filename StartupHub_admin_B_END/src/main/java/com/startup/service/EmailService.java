package com.startup.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import com.startup.model.Mail;


@Service
public class EmailService {

	@Autowired
	 private JavaMailSender emailSender;

	 @Autowired
	 private SpringTemplateEngine templateEngine;

	 
	 private String fromMail = "kumarvidya1989@gmail.com";

	 

	 public void sendResetPasswordMail(Mail mail) throws MessagingException, IOException {
		 

	        MimeMessage message = emailSender.createMimeMessage();
	        MimeMessageHelper helper = new MimeMessageHelper(message,
	                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
	                StandardCharsets.UTF_8.name());
	       // helper.addAttachment("logo.png", new ClassPathResource("memorynotfound-logo.png"));
	        Context context = new Context();
	        context.setVariables(mail.getModel());
	        String html = templateEngine.process("reset_password/PasswordRecoveryMail", context);

	        helper.setTo(mail.getTo());
	        helper.setText(html, true);
	        helper.setSubject(mail.getSubject());
	        helper.setFrom(fromMail);

	        emailSender.send(message);
		 }
	 
}

