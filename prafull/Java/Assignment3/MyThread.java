package Assignment3;
public class MyThread implements Runnable{
    String massage ;
    MyThread(String msg){
        massage = msg;
    }
    public void run(){
        for(int count=0;count<=5;count++){
            try{
                System.out.println("Run Method Massage "+massage);
                Thread.sleep(100);
            }catch(InterruptedException ie){
              System.out.println("Exception In Thread"+ie.getMessage());
            }
        }
    }
    }


