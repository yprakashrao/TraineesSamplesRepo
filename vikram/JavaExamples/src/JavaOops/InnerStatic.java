package JavaOops;

public class InnerStatic {
    static int data=30;
    static class Inner{
        void msg(){
            System.out.println("data is "+data);
        }
    }
    public static void main(String args[]){
        InnerStatic.Inner obj=new InnerStatic.Inner();
        obj.msg();
    }
}
