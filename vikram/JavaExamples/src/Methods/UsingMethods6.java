package Methods;

public class UsingMethods6 {
    static void myMethod(String name,int age){
        System.out.println("my name is "+name+" "+"my age is "+age);
    }

    public static void main(String[] args) {
        myMethod("paul",50);
        myMethod("chris",60);
        myMethod("lucy",35);
    }
}
