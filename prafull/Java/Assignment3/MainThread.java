package Assignment3;

public class MainThread {
          public static void main(String[] args) {
    //     MyThread obj1 = new MyThread("MyThread obj1");
    //     MyThread obj2 = new MyThread("MyThread obj2");
    //     Thread t1 = new Thread(obj1);
    //     Thread t2 = new Thread(obj2);
    //     t1.start();
    //     t2.start();
    // }
        try{
            FaboUsingThread fut = new FaboUsingThread();
            fut.start();
            fut.sleep(4000);
        }catch(Exception ex){
            ex.printStackTrace();
    }
    }
}



