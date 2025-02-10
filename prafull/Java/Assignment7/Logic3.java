package Assignment7;
import java.util.*;
public class Logic3 {
    public static void main(String[] args) {
        List<Integer> fl = new ArrayList<Integer>();
        fl.add(1);
        fl.add(2);
        fl.add(8);
        fl.add(3);
        fl.add(5);
        fl.add(10);
        System.out.println(fl);
        for (int i = 0; i < fl.size(); i++) {
            for (int j = i + 1; j < fl.size(); j++) {
                if (fl.get(i) > fl.get(j)) {
                    int n = fl.get(i);
                    fl.set(i, fl.get(j));
                    fl.set(j, n);
                }
            }
        }
        for (int i : fl) {
            System.out.print(" " + i);
        }
        List<Integer> sl = new ArrayList<Integer>();
        sl.add(8);
        sl.add(9);
        sl.add(6);
        sl.add(3);
        sl.add(10);
        sl.add(11);
        sl.add(12);
        System.out.println();
        System.out.println(sl);
        for (int i = 0; i < sl.size(); i++) {
            for (int j = i; j < sl.size(); j++) {
                if (sl.get(i) > sl.get(j)) {
                    int n = sl.get(i);
                    sl.set(i, sl.get(j));
                    sl.set(j, n);
                }
            }
        }
        for (int i : sl) {
            System.out.print(" " + i);
        }
        System.out.println();
        System.out.println("Using Removeall Method");
        fl.removeAll(sl); // check list1 which element are mising list
        System.out.println("Missing element: " + fl);
        // fl.retainAll(sl); // common element1 list and list2
        // System.out.println("common element: " + fl);
        List<Integer> ml = new ArrayList<Integer>();
        int num;
        for (int i = 0; i < fl.size(); i++) {
            num = fl.get(i);
            for (int j = 0; j < sl.size(); j++) {
                if (!sl.contains(num)) {
                    ml.add(num);
                    break;
                }
            }
        }
        System.out.println("Using for loop and object contains method");
        System.out.println("Mising element: "+ml);
    }
}
