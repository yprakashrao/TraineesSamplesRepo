package JavaOops;

public class UsingInhertance1 {
    float salary = 50000;

}
class child extends UsingInhertance1{
    int bonus = 25000;

    public static void main(String[] args) {
        child myobj = new child();
        System.out.println(myobj.salary+myobj.bonus);

    }
}


