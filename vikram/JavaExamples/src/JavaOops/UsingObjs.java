package JavaOops;

public class UsingObjs {
    int x = 10;
    int y = 20;
    int z = x+y;
    public static void main(String[] args) {
        UsingObjs myobj1 = new UsingObjs();
        UsingObjs myobj2 = new UsingObjs();
        UsingObjs myobj3 = new UsingObjs();
        UsingObjs myobj4 = new UsingObjs();
        System.out.println(myobj1.x);
        System.out.println(myobj2.y);
        System.out.println(myobj3.z);
        System.out.println(myobj4.x);
    }

}
