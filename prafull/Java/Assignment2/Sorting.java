package Assignment2;

public class Sorting {
    public static void main(String[] args) {
        int[] arr = new int[] { 47, 22, 68, 18, 77 };
        {
            for (int i = 0; i < arr.length; i++) {
                for (int j = 0; j < arr.length; j++) {
                    int temp = 0;
                    if (arr[i] < arr[j]) {
                        temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            for (int i = 0; i < arr.length; i++) {
                System.out.print(" " + arr[i]);
            }
        }
    }
}
