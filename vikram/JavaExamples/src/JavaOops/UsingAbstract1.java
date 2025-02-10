package JavaOops;

public abstract class UsingAbstract1 {
    abstract void draw();
}

class Rectangle extends UsingAbstract1{
    void draw(){System.out.println("drawing rectangle");}
}
class Circle1 extends UsingAbstract1{
    void draw(){System.out.println("drawing circle");}
}

class TestAbstraction1{
    public static void main(String args[]){
        UsingAbstract1 s=new Circle1();
        s.draw();
    }
}