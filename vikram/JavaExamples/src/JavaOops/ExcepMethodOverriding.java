package JavaOops;

public class ExcepMethodOverriding {
    void msg() {
        System.out.println("parent method");
    }
}

class TestExceptionChild1 extends ExcepMethodOverriding{
    void msg()throws ArithmeticException {
        System.out.println("child method");
    }

    public static void main(String args[]) {
        ExcepMethodOverriding p = new TestExceptionChild1();
        p.msg();

    }
}
