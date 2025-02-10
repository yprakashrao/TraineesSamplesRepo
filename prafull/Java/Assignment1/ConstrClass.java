public class ConstrClass {
    int id ;
    String name ;

    ConstrClass(){
        System.out.println("Constructor is working");
    }
    ConstrClass(int i ,String n){
        id = i;
        name = n;
    }
    void Display(){
        System.out.println(id+" "+name);
    }
    public static void main(String[] args) {
        ConstrClass cs = new ConstrClass();
        System.out.println(cs);
        ConstrClass cs1 = new ConstrClass(12,"Mukesh");
        ConstrClass cs2 = new ConstrClass(13,"Rakesh");
        cs1.Display();
        cs2.Display();
    }
}
