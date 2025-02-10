package JavaOops;

public class ClassMethods {
    static void throttle(String name){
        System.out.println("car throttle is running fastly "+name);
    }
    static  void speed(int speed){
        System.out.println("speed of the car is too high "+speed);
    }

    public static void main(String[] args) {
        ClassMethods obj = new ClassMethods();
        obj.throttle("bmw");
        obj.speed(100);
    }
}
