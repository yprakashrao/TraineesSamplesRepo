package Assignment4;
import java.util.*;
public class LinkList {
    public static void main(String[] args) {
    LinkedList <Character> name = new LinkedList<Character>();
    name.add('Z'); // Insertion Order is maintain
    name.add('Y'); // Duplicates are allowed
    name.add('X'); // null values are allowed
    name.add('W'); // it is not synchronized
    name.add(null); 
    Collections.sort(name);
    System.out.println(name);

    LinkedList <String> name2 = new LinkedList<String>();
    name2.add("Mukul");
    name2.add("Chetan");
    name2.add("Nilesh");
    name2.add("Vishal");
    name2.add("Kunal");
    name2.add("Yogesh");
    name2.add("Chetan");
    name2.add("Pravin");
    name2.add("Vinit");
    name2.remove("Chetan");
    name2.removeLast();
    System.out.println(name2);
    name.clear();
    }
}
