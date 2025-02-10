package Assignment2;
public class LargestArray {
    public static void main(String[] args) {
        int[] arr = new int[] { 15, 16, 17, 18 };
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.println("Largest Array: " + max);
    }
}
