package com.user.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.user.entities.User;
import com.user.repository.UserRepo;

@Service
public class UserImpl implements UserService {
    
	@Autowired
	private UserRepo userdao;
	
	public UserImpl(UserRepo userdao) {
		this.userdao=userdao;
	}
	
	@Override
	public List<User>getUser(){
		return userdao.findAll();
	}

	@Override
	public User getFindByID(long id) {
		return userdao.findById(id).get();
	}
	
	@Override
	public User saveUser(User user) {
		return userdao.save(user);
	}

	@Override
	public void deleteUser(User user) {
	   userdao.delete(user);
	}
	
	public User loginUser(String username,String password) {
		return null;
	}
	
}
