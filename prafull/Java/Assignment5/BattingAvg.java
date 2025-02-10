import java.util.Scanner;
public class BattingAvg {
    public static void main(String[] args) {
    long matches,runs,innings,notout;
    double avg;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter of the Number of matches of played");
    matches = sc.nextLong();
    while(true){
        System.out.println("Enter the number of innings");
        innings=sc.nextLong();
        if(innings<=matches)
        break;
        System.out.println("Enter the number of innings");
    }
    while(true){
        System.out.println("Enter the number of times notout");
        notout=sc.nextLong();
        if(notout<=innings)
        break;
        System.out.println("Enter the number of times");
    }
    System.out.println("Enter the run scored");
    runs=sc.nextLong();
    if(innings==notout)
    avg=runs;
    else
    avg=runs/(innings-notout);
    System.out.println("Batting Average="+avg);
    }
}
