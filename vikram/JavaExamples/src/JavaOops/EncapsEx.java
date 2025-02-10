package JavaOops;

public class EncapsEx {
    private String petname;

    public String getName(){
        return petname;
    }
    public void setName(String newname){
        this.petname = newname;
    }

    public static void main(String[] args) {
        EncapsEx myobj = new EncapsEx();
        myobj.petname = "tommy";
        System.out.println(myobj.petname);

    }

}
