package JavaOops;

public class Encapsacc2 {
    public static void main(String[] args) {
        EncapsAccount myobj = new EncapsAccount();
        myobj.setAcc_no(12254554);
        myobj.setName("icici");
        myobj.setEmail("icici@gmail.com");
        myobj.setAmount(520055484.5f);
        System.out.println(myobj.getAcc_no()+myobj.getName()+myobj.getEmail()+myobj.getAmount());

    }
}
