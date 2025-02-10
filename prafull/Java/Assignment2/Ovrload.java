package Assignment2;

public class Ovrload {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Ovrload obj = new Ovrload();
        System.out.println(obj.add(10, 20));
        System.out.println(obj.add(20, 30, 30));
    }
}
