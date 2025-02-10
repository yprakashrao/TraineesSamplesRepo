public class Operators {
    public static void main(String[] args) {
    int x =10;
    System.out.println(x++);
    System.out.println(++x);
    System.out.println(x--);
    System.out.println(--x);

    int a = 10;
    int b = 10;
    boolean c =true;
    boolean d =false;
    System.out.println(~a);
    System.out.println(~b);
    System.out.println(!c);
    System.out.println(!d);

    int p = 22;
    int q = 5;
    int r = 17;
    System.out.println(p<q && p<r);
    System.out.println(p<q & p<r);
    System.out.println(p>q || p>r);
    System.out.println(p>q | p<r);

    System.out.println((p<q)?p:q);

    p+=4;
    System.out.println(p);

    q-=4;
    System.out.println(q);

    p*=2;
    q/=2;
    System.out.println(p+""+q);


    
}
}
