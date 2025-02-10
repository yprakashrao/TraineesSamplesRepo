package JavaOops;

public class Modifiers {
    static void myStaticMethod() {
    System.out.println("Static method");
}
public void myPublicMethod() {
        System.out.println("Public method");
    }


    public static void main(String[ ] args) {
        myStaticMethod();


        Modifiers myObj = new Modifiers();
        myObj.myPublicMethod();
    }
}

