package JavaOops;

public class EncapsAccount {
    private long acc_no;
    private  String name,email;
    private  float amount;

    public long getAcc_no(){
        return acc_no;
    }
    public void setAcc_no(long acc_no){
        this.acc_no = acc_no;

    }
    public String getName(){

        return name;
    }
    public void setName(String name){

        this.name = name;
    }
    public String getEmail(){
        return email;
    }
    public void setEmail(String email){

        this.email = email;
    }
    public float getAmount(){
        return amount;
    }

    public void setAmount(float amount) {

        this.amount = amount;
    }

    public static void main(String[] args) {
        EncapsAccount myobj = new EncapsAccount();
        myobj.setAcc_no(1563213755);
        myobj.setName("peter");
        myobj.setEmail("abc@gmail.com");
        myobj.setAmount(523565f);
        System.out.println(" Acc-number:"+" "+myobj.getAcc_no()+'\n'+" "+"Name:"+myobj.getName()+'\n'+" "+"Email:"+myobj.getEmail()+'\n'+" "+"Balance:"+myobj.getAmount());
    }
}

