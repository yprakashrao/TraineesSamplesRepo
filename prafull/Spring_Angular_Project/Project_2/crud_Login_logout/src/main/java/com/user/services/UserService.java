package com.user.services;

import java.util.List;


import com.user.entities.User;

public interface UserService {
  
	 public List <User> getUser();

	 public User getFindByID(long id);
	
	 public User saveUser(User user);
	 
	 public void deleteUser(User user);
	 
	 public User loginUser (String username,String password);
}
