package JavaOops;
class School1{
    String name;
    int Strength;
    int Faculty;

    void meth1(){
        System.out.println("----------method1--------------");
        System.out.println(name);
        System.out.println(Strength);
        System.out.println(Faculty);
    }
    void meth2(String name){
        System.out.println("--------------method2----------");
        System.out.println(this.name);
        System.out.println(this.Strength);
        System.out.println(this.Faculty);
        System.out.println(name);

    }


}
class School2 extends School1{
    String Schoolname;
    String address;
    void meth3(){
        System.out.println("---------method3-----------------");
        System.out.println(Schoolname);
        System.out.println(address);
    }
    void meth4(String Schoolname){
        System.out.println("-----------method4---------------------");
        System.out.println(this.Schoolname);
        System.out.println(this.address);
        System.out.println(Schoolname);
    }

}

public class UsingThis1 {
    public static void main(String[] args) {
       School1 myobj1 = new School1();
       myobj1.name = "john";
       myobj1.Strength = 250;
       myobj1.Faculty = 50;
       myobj1.meth1();
       myobj1.meth2("meth2name");


       School2 myobj2 = new School2();
       myobj2.Schoolname = "siddartha";
       myobj2.address="Hyderabad";
       myobj2.meth3();
       myobj2.meth4("meth4Schlname");


    }

}
