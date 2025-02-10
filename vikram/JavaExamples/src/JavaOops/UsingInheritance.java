package JavaOops;
class parent {
    int a;
    int b;
    public parent(int num1, int num2) {
        a = num1;
        b = num2;
    }
    void add() {

        System.out.println(a + b);
    }

}
class childx extends parent {
    int c;
    int d;
    public childx(int c, int d) {

        super(c, d);
    }
}
public class UsingInheritance {

    public static void main(String[] args) {
        parent pa = new parent(10, 20);
        pa.add();

        childx ch = new childx(50,20);
        ch.add();
    }


}

