package JavaOops;

abstract class AbstractClass {
    String fname = "Peter";
    String lname = "Englad";
    int age = 24;
    public abstract void study();
}
class student extends AbstractClass{
    String year = "passout year is 2018 ";

    @Override
    public void study() {
        System.out.println("here are the all student details");
    }
}
class second{
    public static void main(String[] args) {
        student myobj = new student();
        System.out.println("fname is " +myobj.fname);
        System.out.println(("lname is "+myobj.lname));
        System.out.println("age is "+myobj.age);
        System.out.println(myobj.year);
        myobj.study();


    }
}