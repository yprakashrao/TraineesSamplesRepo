package JavaOops;

public abstract class AbstractionBike {
    AbstractionBike(){System.out.println("bike is created");}
    abstract void run();
    void changeGear(){System.out.println("gear changed");}
}

class Honda extends AbstractionBike{
    void run(){System.out.println("running safely..");}
}

class TestAbstraction2{
    public static void main(String args[]){
        AbstractionBike obj = new Honda();
        obj.run();
        obj.changeGear();
    }
}

