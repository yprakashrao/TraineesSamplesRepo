package JavaOops;

public class LocaIinner1 {
    private int data=30;
    void display(){
        int value=50;
        class Local{
            void msg(){
                System.out.println(value);
            }
        }
        Local l=new Local();
        l.msg();
    }
    public static void main(String args[]){
        LocaIinner1 obj=new LocaIinner1();
        obj.display();
    }
}
