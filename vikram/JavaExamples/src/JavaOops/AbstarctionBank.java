package JavaOops;

public abstract class AbstarctionBank {

        abstract int getRateOfInterest();
    }
    class SBI extends AbstarctionBank{
        int getRateOfInterest(){return 5;}
    }
    class PNB extends AbstarctionBank{
        int getRateOfInterest(){return 4;}
    }

    class TestBank{
        public static void main(String args[]){
            AbstarctionBank b;
            b=new SBI();
            System.out.println("Rate of Interest is: "+b.getRateOfInterest()+" %");
            b=new PNB();
            System.out.println("Rate of Interest is: "+b.getRateOfInterest()+" %");
        }}

