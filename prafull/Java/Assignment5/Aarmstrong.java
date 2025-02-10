import java.util.Scanner;
public class Aarmstrong {
    public static void main(String[] args) {
     Scanner sc = new Scanner(System.in); 
     System.out.println("Enter Your Number");
     int num = sc.nextInt();
     int digit , n , cubsum =0;
     n=num;
     while(num !=0){
        digit = num % 10;
        cubsum +=Math.pow(digit,3);
        num /=10;
     }
     if(cubsum==n)
        System.out.println(n+" is a Armstrong number");
        else
            System.out.println(n+" is not Armstrong number");
        }
     }
