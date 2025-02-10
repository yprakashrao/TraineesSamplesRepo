package com.springframewok.springjdbc1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import business.EmployeeBusiness;
import business.EmployeeBusinessImp;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

    
    ApplicationContext context=new ClassPathXmlApplicationContext("config.xml");
    EmployeeBusiness  employeeBusiness= (EmployeeBusiness) context.getBean("employeeBusiness");
    employeeBusiness.printEmployeeHikes();
    
    
    }
}
