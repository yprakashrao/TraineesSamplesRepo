package Assignment2;

public class Duplicatarray {
    public static void main(String[] args) {
        int[] arr = new int[] { 2, 3, 4, 5, 6, 7, 5, 9 };
        System.out.println("Duplicate Array");
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j])
                    System.out.println(arr[i]);
            }
        }
    }
}
