package JavaOops;

interface  NestedInterface {
    void show();
    interface Message{
        void msg();
    }
}
class TestNestedInterface1 implements NestedInterface.Message{
    public void msg(){System.out.println("Hello nested interface");}

    public static void main(String args[]){
        NestedInterface.Message message=new TestNestedInterface1();
        message.msg();
    }
}
