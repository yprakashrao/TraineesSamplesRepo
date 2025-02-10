
import java.util.Scanner;
public class Logic2 {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Your Number");
      int n = sc.nextInt();
      if(n%2 !=0){
        System.out.println("Hello");
      }else if(n%2==0 && (n>=1 && n<=10)){
        System.out.println("Hi");
      }else if(n>=10 && n<=20){
        System.out.println("Hello");
      }else if(n>20){
        System.out.println("Bye");
      }
    }
}
