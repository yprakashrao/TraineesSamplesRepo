package JavaOops;

abstract class AnonymousInnerclass {
    abstract void eat();
}
class TestAnonymousInner{
    public static void main(String args[]){
        AnonymousInnerclass p=new AnonymousInnerclass(){
            void eat(){System.out.println("nice fruits");}
        };
        p.eat();
    }
}


