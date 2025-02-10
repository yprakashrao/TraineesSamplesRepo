package JavaOops;

public class JavaConstructors {
    int modelYear;
    String modelName;
    String companyname;
    public JavaConstructors(int Year, String Name, String company){
        modelYear = Year;
        modelName = Name;
        companyname = company;
    }

    public static void main(String[] args) {
        JavaConstructors mycar = new JavaConstructors(2000,"X1"  ,"BMW");
        System.out.println("Year :"+mycar.modelYear +" "+" Model :" +mycar.modelName+" "+"Company :"+mycar.companyname);



    }

}