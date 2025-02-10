public class Palindrome {
    public static void main(String[] args) {
        int n = 1545, rev=0, temp, rem;
        temp=n;
        while(n !=0){
            rem= n % 10;
            rev= rev * 10 + rem;
            n=n/10;
        }
        if(temp==rev){
           System.out.println(temp+" Number is palindorme");
        }else{
            System.out.println(temp+" Number is not palindrome");
        }
    }
}
