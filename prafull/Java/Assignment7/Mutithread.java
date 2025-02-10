package Assignment7;
class Mutithread implements Runnable{

    @Override
    public void run() {
       for(int i=1;i<=10;i++){
        System.out.println("value is i: "+i);
        try{
            Thread.sleep(1000);
       }catch(Exception e){

       }
    }
    } 
    public static void main(String[] args) {
        Mutithread t1 = new Mutithread();
        Thread thr = new Thread(t1);
        thr.start();
    }
    }


