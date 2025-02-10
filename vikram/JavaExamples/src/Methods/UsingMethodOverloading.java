package Methods;

public class UsingMethodOverloading {
    static int myMethod(int x , int y) {
        return x + y;
    }
    static double myMethod(double x , double y){
       return x - y;
    }

    public static void main(String[] args) {
        int z = myMethod(5,6);
        double g = myMethod(8d,9d);
        System.out.println(z);
        System.out.println(g);
    }
}
