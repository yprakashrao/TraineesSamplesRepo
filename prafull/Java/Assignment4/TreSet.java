package Assignment4;
import java.util.TreeSet;
public class TreSet {
    public static void main(String[] args) {
       TreeSet <Integer> tr = new TreeSet<Integer>();
       //tr.add(null);  // null is not allowed.
       tr.add(11);  // Duplicates are ignore
       tr.add(14);  // treeSet contains unique element only 
       tr.add(13);  // non synchronized
       tr.add(12);  // maintain ascending order
       tr.add(11);
       tr.remove(0);
       System.out.println(tr);
       System.out.println("Smallest value: "+tr.pollFirst());
       System.out.println("Largest value: "+tr.pollLast());
       System.out.println("Decsending order: "+tr.descendingSet());
       System.out.println("HeadSet: "+tr.headSet(11,true));
      // System.out.println("Subset: "+tr.subSet(null,12));

      TreeSet <String> name = new TreeSet<String>();
      name.add("Swami");
      name.add("Pankaj");
      name.add("Bharat");
      name.add("Sachin");
      name.add("Sanjay");
      System.out.println(name);
      System.out.println(name.contains("Sachin"));
    }
}
