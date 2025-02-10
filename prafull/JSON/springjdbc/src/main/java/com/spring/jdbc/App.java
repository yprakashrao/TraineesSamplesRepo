package com.spring.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Program Started.." );
      @SuppressWarnings("resource")
	ApplicationContext context = new ClassPathXmlApplicationContext("com/spring/jdbc/config.xml");
      JdbcTemplate template = context.getBean("jdbcTemplate",JdbcTemplate.class);
      
      String sql = "insert into patient(id,name,age,mobno,gender,address) values(?,?,?,?,?,?)";
      
      int result = template.update(sql,2,"Manish","23","9812345677","male","Hyderabad");
      System.out.println("Data Inserted..."+result);
      
}
} 
