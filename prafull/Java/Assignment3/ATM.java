package Assignment3;
import java.util.*;
public class ATM {
  public static void main(String[] args) {

    int Balance = 1000000 ,  Withdraw , Deposit ;
    Scanner sc = new Scanner(System.in);

   while(true){
    System.out.println("Choose 1 For Withdraw");
    System.out.println("Choose 2 For Deposit");
    System.out.println("Choose 3 For Check Balance");
    System.out.println("Choose 4 For Exit");
    System.out.println("Choose The Opration You Want To Perform");

    int choice = sc.nextInt();

    switch(choice){

        case 1:
        System.out.println("Enter Money To be Withdrawn");
        Withdraw = sc.nextInt();
        if(Balance>= Withdraw){
        Balance = Balance - Withdraw;
        System.out.println("Please Collect Your Money");
        System.out.println("Avilable Balance: "+Balance);
        }
        else{
        System.out.println("Insufficient Balance");
        }
        break;

        case 2:
        System.out.println("Enter Money To be Deposited"); 
        Deposit = sc.nextInt();
        Balance = Balance + Deposit;
        System.out.println("Your Money Has been Successfully Deposited"); 
        System.out.println("Avilable Balance: "+Balance);
        break;   
        
        case 3:
        System.out.println("Balance: "+Balance);
        break;

        case 4:  
        System.exit(0);
    }
   }
  }  
}
