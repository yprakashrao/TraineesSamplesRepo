package JavaOops;

class child2{
    String CompanyName;
    int EmployeId;
    String EmpName;
    int EmpSalary;
    void Emp1() {
        System.out.println("CompanyName :"+CompanyName);
        System.out.println("EmployeId :"+EmployeId);
        System.out.println("EmpName :"+EmpName);
        System.out.println("EmpSalary :"+EmpSalary);


    }
}

class child1 extends child2 {
    String EmpAddress;
    String EmpInsurance;
    int EmpPin;
    void Emp2() {
        System.out.println("EmpAddress :"+EmpAddress);
        System.out.println("EmpInsurance :"+EmpInsurance);
        System.out.println("EmpPin :"+EmpPin);
    }


}

 class InherirtanceEmploye {

    public static void main(String[] args) {
        child1 myobj = new child1();
        myobj.EmployeId = 123;
        myobj.CompanyName = "Infosys";
        myobj.EmpName = "John";
        myobj.EmpSalary = 54454444;
        myobj.EmpAddress = "USA";
        myobj.EmpInsurance = "Bajaj";
        myobj.EmpPin = 25689;
        myobj.Emp1();
        myobj.Emp2();


    }

}



