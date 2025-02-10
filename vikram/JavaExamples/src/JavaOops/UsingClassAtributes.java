package JavaOops;


public class UsingClassAtributes {
     String x = "john";
     String y = "Doe";
     String z = x+y;
     int age = 50;

     public static void main(String[] args) {
        UsingClassAtributes myobj1 = new UsingClassAtributes();
        UsingClassAtributes myobj2 = new UsingClassAtributes();
        UsingClassAtributes myobj3 = new UsingClassAtributes();
        UsingClassAtributes myobj4 = new UsingClassAtributes();

        System.out.println("MY FIRST NAME IS : "+myobj1.x);
        System.out.println("MY LAST NAME IS : "+myobj2.y);
        System.out.println("MY FULL NAME IS : "+myobj3.z);
        System.out.println("My AGE IS : "+myobj4.age);



    }
}
