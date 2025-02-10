package list1;

public class Exmple {
    public static void main(String[] args) {
        String s1 = "Prafull";
        String temp="";
        for(int i=s1.length()-1;i>=0;i--){
            temp = temp+s1.charAt(i);
        
        }
        System.out.println(temp);
    }
}
