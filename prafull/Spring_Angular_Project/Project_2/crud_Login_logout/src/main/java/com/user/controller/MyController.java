package com.user.controller;

import java.util.LinkedHashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.entities.User;
import com.user.repository.UserRepo;
import com.user.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class MyController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepo repo;
	
	

	@GetMapping("/users")
	public ResponseEntity<?> getUser() {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		List<User> user = userService.getUser();
		if (!user.isEmpty()) {
			map.put("status", 200);
			map.put("data", user);
			return new ResponseEntity<>(map, HttpStatus.OK);
		} else {
			map.clear();
			map.put("status", 404);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/login/{username}/{password}")
	@ResponseBody
	public ResponseEntity<?> loginUser(@PathVariable Map<String, String> variable) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		String username = variable.get("username");
		String password = variable.get("password");
		List<User> user;
		try {
			user = repo.loginUser(username, password);
			if(!user.isEmpty()) {
			map.put("status", 200);
			map.put("data", user);
			return new ResponseEntity<>(map, HttpStatus.OK);
			}
			else {
				map.clear();
				map.put("status", 404);
				map.put("message", "data not found");
				return new ResponseEntity<>(map, HttpStatus.OK);
			}
		} catch (Exception ex) {
			map.clear();
			map.put("status", 500);
			map.put("message", "Internal server error");
			return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/save")
	public ResponseEntity<?> saveUser(@RequestBody User user) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		System.out.println(user.getFullname());
		System.out.println(user.getUsername());
		System.out.println(user.getPassword());
		userService.saveUser(user);
		map.put("status", 200);
		map.put("message", "Record is Saved Successfully!");
		return new ResponseEntity<>(map, HttpStatus.CREATED);
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUserById(@PathVariable long id) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			User user = userService.getFindByID(id);
			map.put("status", 200);
			map.put("data", user);
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 404);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable long id) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			User user = userService.getFindByID(id);
			userService.deleteUser(user);
			map.put("status", 202);
			map.put("message", "Record is deleted successfully!");
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 404);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateUserById(@PathVariable long id, @RequestBody User userDetail) {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		try {
			User user = userService.getFindByID(id);
			user.setFullname(userDetail.getFullname());
			user.setUsername(userDetail.getUsername());
			user.setPassword(userDetail.getPassword());
			user.setPhonenumber(userDetail.getPhonenumber());
			user.setGender(userDetail.getGender());
			userService.saveUser(user);
			map.put("status", 200);
			map.put("data", userService.getFindByID(id));
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception ex) {
			map.clear();
			map.put("status", 404);
			map.put("message", "Data is not found");
			return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
		}
	}
}
