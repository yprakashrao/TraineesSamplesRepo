package Assignment4;
import java.util.HashSet;
public class SetClass {
    public static void main(String[] args) {
        HashSet <String> hs = new HashSet<String>();
        hs.add("Tejas"); // Automatic insertion order maintain
        hs.add("Ritesh"); // null are allowed
        hs.add("Aaditya"); // ignore the duplicates element
        hs.add("Rohit");   // non synchronized
        hs.add("Ritesh");  // 
        hs.add(null);
        hs.remove(1);
        System.out.println(hs);  
        HashSet <Integer> num = new HashSet<Integer>();
        num.add(12);
        num.add(null);
        num.add(13);
        num.add(14);
        num.add(11);
        num.add(10);
        System.out.println(num);
        System.out.println(num.size()); 
    }
}
