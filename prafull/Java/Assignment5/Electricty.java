
import java.util.Scanner;
public class Electricty{
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
     System.out.println("Enter Your Unit");
     int units = sc.nextInt();
     double billpay = 0;
     if(units<100){
        billpay=units*3.21;
     }else if(units<300){
        billpay=100*3.21+(units-100)*2;
     }else if(units>300){
        billpay=100*3.21+200*2+(units-300)*3;
     }
     System.out.println("Bill to pay:"+billpay);
    }
}