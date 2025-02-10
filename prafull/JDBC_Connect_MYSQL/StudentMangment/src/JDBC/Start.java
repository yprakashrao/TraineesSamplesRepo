package JDBC;
import java.util.Scanner;
import java.io.IOException;
public class Start {
	public static void main(String[] args)throws IOException {
		System.out.println("Welcome To Student Mangment App");
		@SuppressWarnings("resource")
		Scanner sc = new Scanner(System.in);
		while(true) {
		  System.out.println("Press 1 to Add student");
		  System.out.println("Press 2 to Delete student");
		  System.out.println("Press 3 to Display student");
		  System.out.println("Press 4 to Update student");
		  System.out.println("Press 5 to Exit student");
		  
		  int c = sc.nextInt();
		  
		  if(c==1) {
			   System.out.println("Enter user name :");
			   String name = sc.next();
			   System.out.println("Enter user phone :");
			   String phone = sc.next();
			   System.out.println("Enter user city :");
			   String city = sc.next();
			   
			   Student st = new Student(name,phone,city);
			   boolean answer = StudentDao.insertStudentTodb(st);
			   
			   if(answer)
			   {
				   System.out.println("Student is added successfully");
			   }
			   else 
			   {
				   System.out.println("Something went wrong");
			   }
			   System.out.println(st);
			   
			   
		  }else if(c==2)
		  {
			 System.out.println("Enter student id to delete: ");
			 int userId = sc.nextInt();
			 boolean f =StudentDao.deleteStudent(userId);
			 if(f) {
				 System.out.println("Deleted");
			 }else {
				 System.out.println("Something went wrong");
			 }
		  }
		  else if(c==3) 
		  {
			StudentDao.showAllstudents(); 
		  }
		  else if(c==4)
		  {
			  
		  }
		  else if(c==5) 
		  {
			  break;
		  }
		  else 
		  {
			  
		  }
		}
		System.out.println("Thank you for using my application");
	}
}
