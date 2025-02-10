package Assignment2;

public class Reverse {
    public static void main(String[] args) {
        int[] arr = new int[] { 9, 8, 7, 6, 5 };

        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(" " + arr[i]);
        }
    }
}
