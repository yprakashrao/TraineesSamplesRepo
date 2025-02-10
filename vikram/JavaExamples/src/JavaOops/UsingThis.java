package JavaOops;
class pr1{
  int id;
  String name;
  void meth1(){
      System.out.println("------meth1---------");
      System.out.println(id);
      System.out.println(name);
      System.out.println("---------------------");
  }

  void meth4(String name){
      System.out.println("------meth4---------");

      System.out.println(name);
      System.out.println(this.name);
      System.out.println("---------------------");

  }


}
class pr2 extends pr1{
   int id;

   String name;

   void meth2(){
       System.out.println("------meth2---------");
       System.out.println(id);
       System.out.println(name);

       System.out.println(this.id);
       System.out.println(this.name);
       System.out.println("---------------------");

   }


}
public class UsingThis {
    public static void main(String[] args) {
        pr1 myobj1 = new pr1();
        myobj1.id = 10;
        myobj1.name = "peter";
        myobj1.meth1();
        myobj1.meth4("abc");


        pr2 myobj2 = new pr2();
        myobj2.id = 20;
        myobj2.name = "Englad";
        myobj2.meth2();


    }
}
