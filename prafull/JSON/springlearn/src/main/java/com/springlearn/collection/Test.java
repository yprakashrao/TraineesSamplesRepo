package com.springlearn.collection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
  public static void main(String[] args) {
	
	  
	  ApplicationContext context=new ClassPathXmlApplicationContext("com/springlearn/collection/collection.xml");
      Employee emp1 =(Employee)context.getBean("emply1");
      System.out.println(emp1.getName());
      System.out.println(emp1.getPhones());
      System.out.println(emp1.getAddresss());
      System.out.println(emp1.getJob());
      ((AbstractApplicationContext) context).close();
  }
}
