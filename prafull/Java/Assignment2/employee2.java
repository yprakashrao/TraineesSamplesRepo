package Assignment2;
public class employee2 {
    public static void main(String[] args) {

        employee e = new employee();
        e.setID(5);
        e.setName("Prafull");
        e.setSalary(25000);

        System.out.println("Id: " + e.getID());
        System.out.println("Name: " + e.getName());
        System.out.println("Salary: " + e.getSalary());

        Car c = new Car("BMW", "25cr", "150Kmph");
        System.out.println(c.getName());
        System.out.println(c.getPrice());
        System.out.println(c.getTopspeed());

    }
}
