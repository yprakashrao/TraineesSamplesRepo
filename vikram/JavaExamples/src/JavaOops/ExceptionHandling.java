package JavaOops;

public class ExceptionHandling {

    public static void main(String[] args) {
        try {
            int var1 = 100 / 0;
        } catch (ArithmeticException var2) {
            System.out.println(var2);
        }

        System.out.println("rest of the code...");
    }
}
