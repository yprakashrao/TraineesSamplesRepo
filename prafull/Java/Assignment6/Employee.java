public final class Employee {
    int id;
    String name;
    String city;
    Employee(int id,String name,String city){
        this.id = id;
        this.name = name;
        this.city = city;
    }
    public String toString(){
        return id+" "+name+" "+city;
    }
    public static void main(String[] args) {
        Employee e1  = new Employee(1,"Prafull","Dhule");
        Employee e2 = new Employee(2, "Manish", "Hyderabad");
        Employee e3 = new Employee(3, "Prakash", "Vijaywada");
        Employee e4 = new Employee(4, "Vikram", "Karim Nagar");

        System.out.println(e1);
        System.out.println(e2);
        System.out.println(e3);
        System.out.println(e4);

    }
}

