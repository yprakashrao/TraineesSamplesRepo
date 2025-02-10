package com.springlearn;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    
    {
    	ApplicationContext context = new ClassPathXmlApplicationContext("config.xml");
    	Patient obj = (Patient) context.getBean("patient");
    	System.out.println(obj);
    	((AbstractApplicationContext) context).close();
    }
}
