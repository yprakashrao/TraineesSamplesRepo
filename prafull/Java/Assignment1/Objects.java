public class Objects {
    static int a =19;
    void meth1(){
        System.out.println("Welcome To my Page");
    }
     void meth2(int id , String name , long phone){
        System.out.println("Your Details");
        System.out.println(id+" "+name+" "+phone);
     }
     void meth3(){
        Boolean ok = true;
        System.out.println(ok);  
     }  

     void fact(int n){
        int fact =1 ;
        for(int i=1;i<=n;i++){
            fact = fact*i;
        }
            System.out.println("Factorial is:"+fact);
        }
     

    public static void main(String[] args) {
        Objects obj = new Objects();
        obj.meth1();
        System.out.println(a);
        obj.meth2(12,"Prafull",7448118600L);
        obj.meth3();
        obj.fact(5);
    }
}



