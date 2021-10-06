package com.startup.controller;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.startup.model.User;
import com.startup.service.RoleServices;
import com.startup.service.UserService;

@Controller
@RequestMapping("/api/")
public class AdminController {
	
	@Autowired
	UserService userService;
	
	
	@Autowired
	RoleServices roleService;
	
	@RequestMapping(value = "adminLogin", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> login(@RequestBody String jsonStr) throws JSONException {
		Map<String, Object> response = new HashMap<String, Object>();
		JSONObject jsonObject = new JSONObject(jsonStr);
		User user = userService.findByEmail(jsonObject.getString("email"), 1);
	
		if (user != null ) {

			if (jsonObject.getString("password").equals(user.getPassword())) {



					Map<String, Object> data = new HashMap<String, Object>();

					SecureRandom random = new SecureRandom();
					user.setSecretId(new BigInteger(130, random).toString(32));

					userService.save(user);

					data.put("user", user);

					response.put("data", data);
					response.put("status", 1);
					response.put("code", "200");
					response.put("message", "Login successfully");
					return new ResponseEntity<>(response, HttpStatus.OK);

			} else {

				response.put("status", 0);
				response.put("message", "Email or password incorrect.");
				return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);

			}

		} else {

			response.put("status", 0);
			response.put("message", "Email or password incorrect.");
			return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);

		}

	}
	
	 @RequestMapping(value="getUsers",method = RequestMethod.POST)
		public ResponseEntity<String> searchUsers()
				throws JsonProcessingException, ParseException {
			Map<String, Object> objMap = new HashMap<String,Object>();
			ObjectMapper mapper = new ObjectMapper();
			try {
				
							
				String condition = "role = 2";
				
				List<User> users = userService.getUserList(condition);
				
				
				
				objMap.put("list", users);
				String jsonInString = mapper.writeValueAsString(objMap);
				return new ResponseEntity<String>(jsonInString,HttpStatus.OK);
			}catch (Exception e) {
				objMap.put("message", e.getMessage());
				String jsonInString = mapper.writeValueAsString(objMap);
				return new ResponseEntity<String>(jsonInString,HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

}
