import java.util.Scanner;
public class ClassP{
   public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);
    System.out.println("Enter Your Number");
    String reverse = "";
    String n = sc.next();
     for(int i=n.length()-1;i>=0;i--)
     reverse = reverse + n.charAt(i);
     if(n.equals(reverse))
     System.out.println(n+" is a Palindrome");
     else
        System.out.println(n+" is a not Palindrome");
     }
     }
   
