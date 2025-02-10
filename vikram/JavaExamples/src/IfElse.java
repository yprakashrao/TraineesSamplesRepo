public class IfElse {
    public static void main(String [] args){
        int age = 19;
        if(age > 18){
            System.out.println("valid age for voting");
        }
        else if(age<18){
            System.out.println("Not a valid age for voting");
        }
        else{
            System.out.println("correct age for voting");
        }
    }
}
