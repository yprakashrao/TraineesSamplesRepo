package Assignment3;
public class ThreadTest extends Thread{
    private Thread tr ;
    private String trname;
    ThreadTest(String msg){
        trname =  msg;
        System.out.println("Creating Thread: "+trname);
    }
    public void run(){
        System.out.println("Running Thread: "+trname);
        try{
            for(int i=0;i<5;i++){
                System.out.println("Thread: "+trname+","+i);
                Thread.sleep(50);
            }
        }catch(InterruptedException ie){
            System.out.println("Exception in thread: "+trname);
        }
        System.out.println("Thread"+trname+"Continue...");
    }
    public void start(){
        System.out.println("Start method"+trname);
        if(tr==null){
            tr = new Thread(this,trname);
            tr.start();
        }
    }
}
    class Prafull{
    public static void main(String[] args) {
     ThreadTest tr1 = new ThreadTest("First Thread");
     tr1.start();
     ThreadTest tr2 = new ThreadTest("Second Thread");
     tr2.start();   
    }
}
