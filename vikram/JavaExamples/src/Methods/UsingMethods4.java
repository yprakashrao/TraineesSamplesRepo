package Methods;

public class UsingMethods4 {
    static void checkAge(int age){

        if(age<18){
            System.out.println("age is not sufficient for voting");
        }
        else {
            System.out.println("correct age");
        }

    }

    public static void main(String[] args) {
        checkAge(20);

    }
}
