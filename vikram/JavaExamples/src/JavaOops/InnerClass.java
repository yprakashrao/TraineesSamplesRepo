package JavaOops;

public class InnerClass {
    private int data=30;
    class Inner{
        void msg(){
            System.out.println("data is "+data);
        }
    }
    public static void main(String args[]){
        InnerClass obj=new InnerClass();
        InnerClass.Inner in=obj.new Inner();
        in.msg();
    }
}
