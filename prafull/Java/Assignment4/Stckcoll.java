package Assignment4;
import java.util.Stack;

public class Stckcoll {
    public static void main(String[] args) {
        Stack <String> st = new Stack<String>();
        st.push("Vikram"); // stack perform Last in first out principle
        st.push("Manish"); // it is Synchronized.
        st.push("Vikram");  // Duplicates are allowed.
        st.push(null);      // null are allowed.
        st.push("Vinod");   // insertion order is not maintain.
        st.push("Nikhil");
        st.empty();
        System.out.println(st);
        System.out.println("Pop Opration Perform");
        st.pop();
        System.out.println(st);
        
        Stack <Integer> num = new Stack<Integer>();
        num.push(null);
        num.add(11);
        num.push(14);
        num.push(12); 
        num.push(13); 
        num.push(10); 
        System.out.println(num);
        num.pop();
        // Collections.sort(num);    
         System.out.println(num);
    }
}
