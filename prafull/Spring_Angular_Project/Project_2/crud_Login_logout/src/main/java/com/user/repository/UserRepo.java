package com.user.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.user.entities.User;

public interface UserRepo extends JpaRepository <User,Long> {
   
	@Query(value = "SELECT * FROM user u WHERE u.username=?1 and u.password=?2", nativeQuery = true)
	List<User> loginUser(String username, String password);
   
}
