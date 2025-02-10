package JavaOops;

public class InnerClass1 {
    private String s = "john";

    class inner  {
        void msg() {
            System.out.println("name is :"+s);
        }


    }
    public static void main(String[] args) {
        InnerClass1 i1 = new InnerClass1();
        InnerClass1.inner in=i1.new  inner();
        in.msg();
    }
}