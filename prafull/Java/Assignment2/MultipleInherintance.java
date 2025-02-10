package Assignment2;

interface Show{
    void meth1();
}
interface Display{
    void meth2();
}
public class MultipleInherintance implements Show , Display{
    public void meth1(){
        System.out.println("Hi");
    }
    public void meth2(){
        System.out.println("Prafull Bhise");
    }
    
     public static void main(String[] args) {
        MultipleInherintance obj = new MultipleInherintance();
        obj.meth1();
        obj.meth2();
     }
    }

