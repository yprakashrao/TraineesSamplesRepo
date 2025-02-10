package Assignment3;

public class StringClass {
    public static void main(String[] args) {
        String name = "Solventek";
        String name2 = "Ediko";
        String name3 = "Envision";
        String name4 = "Software Company";

        boolean result = name.equals(name3);

        System.out.println("Length: "+name+" "+name.length());
        System.out.println("Joined String: "+name.concat(" "+name4));
        System.out.println("Joined String: "+name2.concat(" "+name4));
        System.out.println("First & Third are equal: "+result);
        System.out.println("index position: "+name3.indexOf('v'));
        System.out.println("White Space: "+name4.trim());
        System.out.println("Substring: "+name3.substring(2,8));
    }
}
