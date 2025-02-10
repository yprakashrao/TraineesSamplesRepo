package Assignment3;
import java.io.*;
public class FaboUsingThread extends Thread{
  public void run(){
    try{
    int a=0,b=1,c=0;
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    System.out.println("Enter The Limit of Fabonacci: ");
    int n = Integer.parseInt(br.readLine());
    System.out.println();
    System.out.println("Fabonacci series: ");
    while(n>0){
        System.out.print(c+" ");
        a=b;
        b=c;
        c= a+b;
        n=n-1;
    }
    }catch(Exception ex){
        ex.printStackTrace();
    }
  }  
}
