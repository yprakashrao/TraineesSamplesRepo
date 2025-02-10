package Assignment3;
import java.io.*;
public class ExcptionClass {
//   public static void main(String[] args) {
//     try{
//         int [] n = {1,2,3};
//         System.out.println(n[10]);
//     }catch(Exception e){
//         System.out.println("Something Went Wrong");
//     }finally{
//         System.out.println("The Try Catch Finished");

//    System.out.println("****************************************");

    // static void CheckAge(int Age){
    //     if(Age < 18){
    //         throw new ArithmeticException("You Must be at Least 18 yeras old");
    //     }else{
    //         System.out.println("You are old enough");
    //     }
    // }
    // public static void main(String[] args) {
    //  CheckAge(15);   
    // }
    // }
    // public static void main(String[] args) {
    //     try {
    //         int a = 10 / 0;
    //         System.out.println("Rest of code in try Block");
    //     } catch (ArithmeticException e) {
    //         System.out.println("Arithmatic Exception =>" + e.getMessage());
    //     }
    // }
    public static void findfile() throws IOException {
        File newfile = new File("code.txt");
        FileInputStream ftr = new FileInputStream(newfile);
    }

    public static void main(String[] args) {
        try {
            findfile();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
