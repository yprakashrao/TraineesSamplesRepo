public class Task4 {
    public static void main(String[] args) {
        String name = "    Solventek    ";
        char ch [] = {'S','o','l','v','e','n','t','e','k'};
        String name2 = new String(ch);
        System.out.println(name);
        System.out.println(name2);
       
        name=name.concat(" Company");
        System.out.println(name);
        System.out.println(name.equals(name2));
        System.out.println(name==name2);
        System.out.println(name.replace("Solventek", "Private"));
        System.out.println(name.trim());
    }
}
