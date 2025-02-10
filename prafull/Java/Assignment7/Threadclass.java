package Assignment7;

public class Threadclass extends Thread{
    public void run(){
        for(int i=10;i>=1;i--){
            System.out.println("value is: "+i);
            try{
                Thread.sleep(1000);
            }catch(Exception e){

            }
        }
    }
    public static void main(String[] args) {
        Threadclass t1 = new Threadclass();
        Thread thr = new Thread(t1);
        thr.start(); 
    }  
    }

