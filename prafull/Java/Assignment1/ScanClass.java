import java.util.Scanner;
public class ScanClass{
    public static void main(String[] args) {
        Scanner scan =new Scanner(System.in);
        System.out.println("Enter Your Id");
        int id = scan.nextInt();
        System.out.println("Enter Your Name");
        String name = scan.next();
        System.out.println("Enter Your phone No");
        Long phone = scan.nextLong();
        System.out.println("Enter Your Salary");
        short salary = scan.nextShort();
        
        
        System.out.println("Id is: "+id);
        System.out.println("Name is: "+name);
        System.out.println("phone no: "+phone);
        System.out.println("Salary: "+salary);
        
    }
}


