package Assignment7;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;
import java.util.Vector;

public class Colection {
    public static void main(String[] args) {
   List <Integer> list1 = new ArrayList<>();
   List <Byte> list2 = new LinkedList<>();
   List <Short> list3  = new Vector<>();
   List <Long> list4 = new Stack<>();
   
   list1.add(12);
   list1.add(13);
   list1.add(14);
   Iterator  itr = list1.iterator();
   while(itr.hasNext()){
    System.out.println(itr.next());
   }

}
}
