package Assignment3;

public class MultiThredClass implements Runnable{
    public void run(){
        try{
            System.out.println("Thread: "+Thread.currentThread().getId()+" is Running");
        }catch(Exception e){
            System.out.println("Exception Has Occured is caught");
        }
    }
}
class MultiThredMain{
    public static void main(String[] args) {
        int n = 6;
        for(int i=0;i<n;i++){
        Thread obj = new Thread(new MultiThredClass());
        obj.start();
        }
    }
}
