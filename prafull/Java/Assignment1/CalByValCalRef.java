import java.lang.*;
public class CalByValCalRef {
    int data =50;
    void change (int data){
        data = data+100;
}
    public static void main(String[] args) {
     CalByValCalRef obj = new CalByValCalRef();
    //  System.out.println("Before change"+change.data);
    //  obj.change(500);
    //  System.out.println("After Change"+change.data);   
    }
}
