public class ClassD {
    static int data = 30;
    static class ClassF{
     void display(){
        System.out.println("data"+data);
     }
    public static void main(String[] args) {
     ClassD.ClassF obj = new ClassD.ClassF();
     obj.display();   
    }
}
}
