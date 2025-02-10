package Assignment7;
//import java.text.SimpleDateFormat;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
public class DateTask2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter date in format dd/MM/yyyy: ");
        String dateToStr = sc.nextLine();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
          LocalDate ldate = LocalDate.parse(dateToStr, formatter);
          SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy L E");
          String Str = sdf.format(Date.from(ldate.atStartOfDay(ZoneId.systemDefault()).toInstant()));
          System.out.println(Str);

        // the parse method does not support simpledateFormat for localdate method.

        //  SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        //  LocalDate ldate = LocalDate.parse(dateToStr,sdf);
        //  String str = sdf.format(ldate);
        //  System.out.println(Str);
    }
}
