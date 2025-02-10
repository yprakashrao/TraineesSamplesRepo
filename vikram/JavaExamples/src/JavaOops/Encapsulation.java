package JavaOops;

public class Encapsulation {
    private String name;

    public String getName(){
        return name;
    }
    public void setName(String newname){
        this.name = newname;
    }

    public static void main(String[] args) {
        Encapsulation myobj = new Encapsulation();
        myobj.name="john";
        System.out.println(myobj.name);
    }

}
