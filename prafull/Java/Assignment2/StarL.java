package Assignment2;

public class StarL {
    public static void main(String[] args) {
        String name = "ketnevlos";
        String name2 = new String("Software");
        for (int i = name.length() - 1; i >= 0; i--) {
            System.out.print(name.charAt(i));
        }
        System.out.println(" " + name2);
    }
}
