package JavaOops;

 interface InterfaceInner {
     void eat();
 }
class TestAnnonymousInner1{
    public static void main(String args[]){
        InterfaceInner e=new InterfaceInner(){
            public void eat(){System.out.println("nice fruits");}
        };
        e.eat();
    }
}