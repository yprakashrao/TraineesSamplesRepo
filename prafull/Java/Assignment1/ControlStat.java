public class ControlStat {
    public static void main(String[] args) {
       int a = 45;
       int b = 23;
       
       if(a+b >20){
        System.out.println("a+b is greter than 20");
       }
       else{
        System.out.println("a+b is less than 20");
       }


       String s = "Maharashtra";
       if(s=="Rajsthan"){
        System.out.println("state is rajsthan");
       }
       else if(s=="Gujrat"){
        System.out.println("state is gujrat");
       }
       else if(s=="Telangana"){
        System.out.println("state is Telangana");
       }
       else{
        System.out.println(s);
       }

       System.out.println("----------------------------------");

       int num = 2;
       switch(num){
        case 0:
        System.out.println("Number is 0");
        break;
        case 1:
        System.out.println("Number is 1");
        break;
        case 2:
        System.out.println("Number is 2");
        break;
        default:
        System.out.println(num);
       }
    }
}
