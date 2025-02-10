package Assignment2;

interface Sayable{
     void Say();
}
public class Lambda {
    public static void saySomething(){
     System.out.println("Hello, This static method");
    }
    public static void main(String[] args) {
       Sayable sayable = Lambda::saySomething;
       sayable.Say();
    }
}
