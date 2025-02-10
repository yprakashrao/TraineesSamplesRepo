package Assignment2;

// interface Sayble{
//   public String Say();
//   }
// public class LambadEx {
//     public static void main(String[] args) {
//        Sayble s = ()->{
//         return "This is lambda Expression";
//        };
//        System.out.println(s.Say());
//     }
// }

interface Addable{
    public int add(int a,int b);
}
public class LambadEx{
    public static void main(String[] args) {
        Addable ad1 = (a,b)->(a+b);
        System.out.println(ad1.add(10,20));

        Addable ad2 = (int p,int q)->(p+q);
        System.out.println(ad2.add(55,55));
    }
}