package Methods;

import java.util.Scanner;

public class UsingMethods2 {
    static void mymethod1() {
        int num1 = 10;
        int num2 = 20;
        System.out.println(num1 + num2);
    }

    static void mymethod2() {
        System.out.println("how are you");
    }
    static  void mymethod3(){
        System.out.println("please enter the number");
        Scanner  s = new Scanner(System.in);
        int num  = s.nextInt();
        System.out.println(num);
    }

    public static void main(String[] args) {
        mymethod1();
        mymethod2();
        mymethod3();

    }
}
