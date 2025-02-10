package Methods;

public class UsingMethodOverloading1 {
    static int plusMethodInt(int x, int y) {
        return x + y;
    }
    static float plusMethodDouble(float x, float y) {
        return x - y;
    }

    public static void main(String[] args) {
        int myNum1 = plusMethodInt(8, 5);
        float myNum2 = plusMethodDouble(4.0f, 6.5f);
        System.out.println("int: " + myNum1);
        System.out.println("double: " + myNum2);

    }}
