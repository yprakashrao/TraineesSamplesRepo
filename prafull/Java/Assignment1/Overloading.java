public class Overloading {
        static int add(int a, int b){
        return a+b;
        }
        static int add(int a,int b, int c){
        return a+b+c;
        }
        static double add(double a, double b, double c){
        return a+b+c;    
        }
        public static void main(String[] args) {
            System.out.println("method Overloading Changing No of argu & data type");
            System.out.println(Overloading.add(12,12));
            System.out.println(Overloading.add(45,46 , 47));
            System.out.println(Overloading.add(12.3,12.6,12.44));
        }
    }

