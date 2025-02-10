package Assignment4;
import java.util.*;
public class VectorColl {
   public static void main(String[] args) {
      Vector <String> name = new Vector<String>();
      name.add("Pradip"); // Duplicates are allowed
      name.add("Bhushan");// Insertion Order is not maintain
      name.add("Dipak");  // null are allowed
      name.add("Pramod"); // it is Synchronized
      name.add("Sagar");
      System.out.println(name.size());
      System.out.println(name.capacity());
      System.out.println(name);

      name.addElement("Aryan");
      if(name.contains("Pramod")){
        System.out.println("Pramod is present in list"+name.indexOf("pramod"));
      }
      else{
        System.out.println("pramod is not present in the list");
      }
      

      Vector <Integer> num = new Vector<Integer>();
      num.add(15);
      num.add(12);
      num.add(17);
      num.add(14);
      num.add(11);
      num.add(null);
      System.out.println(num);
      System.out.println("remove element: "+num.remove(4));
      System.out.println("Hash code method: "+num.hashCode());
      System.out.println(num);

   } 
}
