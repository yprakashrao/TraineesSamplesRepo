public class Overriding {
    void run(){
        System.out.println("Vehicle is running");
    }
    class Vehicle extends Overriding{
        void run(){
            System.out.println("Bike is running");
        }
    }
        public static void main(String[] args) {
           Overriding obj = new Overriding();
           obj.run();
        }
    } 

