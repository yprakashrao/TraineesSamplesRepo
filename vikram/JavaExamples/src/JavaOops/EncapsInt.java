package JavaOops;

public class EncapsInt {
    private int number;

    public int getNumber(){
        return number;
    }
    public void setNumber(int newnumber){
        this.number = newnumber;
    }

    public static void main(String[] args) {
        EncapsInt myobj = new EncapsInt();
        myobj.number= 1;
        System.out.println(myobj.number);
    }
}
