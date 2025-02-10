public class Variable {
    static int m = 100;
    void meth1(){
        int n = 90;
        System.out.println(n);
    }
    public static void main(String[] args) {
      Variable v = new Variable();
      System.out.println(m);
      int data = 50;
      System.out.println(data);
    }
}
