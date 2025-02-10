package JavaOops;

public abstract class UsingAbstract {

    public abstract void cars();
    public void sleep() {
        System.out.println("bmw");
    }
}
class myclass extends UsingAbstract {
    public void cars() {

        System.out.println("The car company is");
    }
}

class Main {
    public static void main(String[] args) {
        myclass mycar = new myclass();
        mycar.cars();
        mycar.sleep();
    }
}