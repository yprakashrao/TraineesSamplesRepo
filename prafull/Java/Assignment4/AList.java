package Assignment4;

import java.util.*;
public class AList{
    public static void main(String[] args) {
         ArrayList <String> name= new ArrayList<String>();
         name.add("Rakesh"); // insertion order is maintain
         name.add("Mahesh"); // Duplicates are allowed
         name.add("Rahul");  // null are allowed
         name.add("Pawan");  // it is not synchronized
         name.add(null);
         name.add("Prashant");
         name.add("Prashant"); 
         name.set(3,"Ganesh");
         System.out.println(name);
         Collections.sort(name);
         System.out.println(name);

         ArrayList <Integer> num = new ArrayList<Integer>();
         num.add(5);
         num.add(4);
         num.add(3);
         num.add(2);
         num.add(1);
         num.add(6);
         num.remove(5);
         System.out.println(num);
         Collections.sort(num);
         System.out.println(num);
    }
}