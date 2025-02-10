package Assignment7;

// (Task1) Using LocalDate Time Passing the Parameter by method DateTime convert  into The String

// import java.time.LocalDateTime;
// import java.time.format.DateTimeFormatter;
// class DateTask {
//     public static String dateTimeConvertString(int year, int month, int day, int hour, int minute, int second) {
//         try {
//             LocalDateTime dateTime = LocalDateTime.of(year, month, day, hour, minute, second);
//             return dateTime.format(DateTimeFormatter.ISO_DATE_TIME);
//         } catch (Exception e) {
//             return e.toString();
//         }
//     }
//     public static void main(String[] args) {
//          String dateandtime = dateTimeConvertString(2021, 11, 12, 23, 36, 12);
//          System.out.println(" "+dateandtime);
//     }
// }


//  //(Task2) Convert String To Date Format using simpledate Format.

//   import java.text.SimpleDateFormat;  
//   import java.util.Date;  
//     public class DateTask {
//     public static void main(String[] args) {
//         Date date = new Date();  
//         SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");  
//         String stringDate = formatter.format(date);  
//         formatter = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");  
//         stringDate = formatter.format(date);  
//         System.out.println("Date Format with dd-MM-yyyy hh:mm:ss : "+stringDate);    
//     }
// }


// //(Task3) using DateTime Formatter print the Date and Time only using parse method.

// import java.time.LocalDateTime;
// import java.time.ZonedDateTime;
// import java.time.format.DateTimeFormatter;
// public class DateTask {
//     public static void main(String[] args) {
//         // String date = "2021-03-17";
//         // LocalDate localDate = LocalDate.parse(date);
//         // System.out.println(localDate);
//         // System.out.println("day of month "+localDate.getDayOfMonth());
//         // System.out.println("day of year "+localDate.getDayOfYear());

//         DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss.SSSZ");
//         ZonedDateTime zdt = ZonedDateTime.from(fmt.parse("09-12-2022 11:28:45.345+0800"));
//         System.out.println(zdt);

//         LocalDateTime localDT = LocalDateTime.now();
//         System.out.println(DateTimeFormatter.ofPattern("dd/MM/yyyy kk:mm:ss").format(localDT));
//     }
// }


// // (Task4) Check The Date in String Format or not using lenient method using simpledateformat
// import java.text.ParseException;
// import java.text.SimpleDateFormat;
// public class DateTask {

//     public static boolean checkDate(String inDate){
//         SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
//         dateFormat.setLenient(false);
//             try{
//                 dateFormat.parse(inDate.trim());
//             }catch (ParseException pe){
//                 return false;
//             }
//             return true;
//     }
//     public static void main(String[] args) {
//        System.out.println(checkDate("28-13-2021")); 
//     }
// }

// // (Task5) Calculate The diff between Days,month,year using Duration And period method
// import java.time.Duration;
// import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.time.Period;
// public class DateTask {
//     public static void main(String[] args) {
//       LocalDateTime d1 = LocalDateTime.of(2019,12,3,11,20,20);
//       LocalDateTime d2 = LocalDateTime.of(2021,8,5,12,20,47);
      
//       Duration duration = Duration.between(d1, d2);
//       System.out.println("Duration in seconds: "+duration.getSeconds());
      
//       LocalDate d3 = LocalDate.of(2019,12,3);
//       LocalDate d4 = LocalDate.of(2021,8,5);
//       Period period = Period.between(d3, d4);

//       System.out.println("No of days: "+period.getDays());
//       System.out.println("No of month: "+period.getMonths());
//       System.out.println("No of Years: "+period.getYears());
//       System.out.println("No of Years: "+period);
//     }
// }


// // (Task6) Add & Substract Date using calender 
// import java.text.DateFormat;
// import java.text.SimpleDateFormat;
// import java.util.Calendar;
// import java.util.Date;
// public class DateTask {
//     public static void main(String[] args) {
//        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
//        Date date = new Date();
//        System.out.println("Today's Date: "+dateFormat.format(date));
//        System.out.println("******************************************");

       
//        System.out.println("Add 3 Days To current Date: "+addSustractDate(3));
//        System.out.println("Subtract 3 Days To current Date: "+addSustractDate(-3));


//        System.out.println("Add 3 Month To current Date: "+addSustractMonth(3));
//        System.out.println("Subtract 3 Month To current Date: "+addSustractMonth(-3));


//        System.out.println("Add 3 Year To current Date: "+addSustractYear(3));
//        System.out.println("Subtract 3 Year To current Date: "+addSustractYear(-3));

//     }
//     public static String addSustractDate(int n){
//         DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
//         Calendar cal = Calendar.getInstance();
//         cal.add(Calendar.DATE,n);
//         String result = dateFormat.format(cal.getTime());
//         return result; 
//     }
//     public static String addSustractMonth(int n){
//         DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
//         Calendar cal = Calendar.getInstance();
//         cal.add(Calendar.MONTH,n);
//         String result = dateFormat.format(cal.getTime());
//         return result; 
// }
//        public static String addSustractYear(int n){
//        DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
//        Calendar cal = Calendar.getInstance();
//        cal.add(Calendar.YEAR,n);
//        String result = dateFormat.format(cal.getTime());
//        return result; 
// }
// }


// // (Task7) convert String To date using DateFormatter.
// import java.util.Date;
// import java.text.DateFormat;
// import java.text.SimpleDateFormat;
// // import java.util.Calendar;     
// public class DateTask {
//     // Java Program to convert Date to String 
//      public static String convertDateTostring(String date){
//          // convert String format to date object
//        DateFormat df = new SimpleDateFormat(date);
//     //     // get using Calender object
//            Date today = new Date();
//     //     // convert date into string using format
//         String dateToString = df.format(today);
//        return (dateToString);   
//          }
//         public static void main(String[] args)throws Exception {
//          String date = "09-12-2022";
//          System.out.println(convertDateTostring(date));  

//         // // Custom String as input
//         // String strdate = "09/12/2022";
//         // // Creating object of date class with ref to 
//         // // simpledate format class and pass the above string object
//         // Date strTodate = new SimpleDateFormat("dd/MM/yyyy").parse(strdate);
//         // System.out.println(strdate+" "+strTodate);
//         } 
//     }

import java.util.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Scanner;
public class DateTask{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Date");
        String strTodate=sc.next();
        LocalDate ldate=LocalDate.parse(strTodate);
        SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy");
        Date date = Date.from(ldate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        String dateString=format.format(date);
        System.out.println(dateString);
        sc.close();
    }
}


