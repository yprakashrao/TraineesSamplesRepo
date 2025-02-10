package JavaOops;

import java.util.Scanner;

class car {
    String carbrand;


}

class bike extends car {
    String bikeBrand;

}

public class InheritanceVehicle {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        car c = new car();
        bike b = new bike();

        System.out.println("enter car brand: ");
        c.carbrand = s.nextLine();

        System.out.println("enter bike brand: ");
        b.bikeBrand = s.nextLine();

        System.out.println(c.carbrand);
        System.out.println(b.bikeBrand);
    }

}
