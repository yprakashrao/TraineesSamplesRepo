package list1;

public class Sorting {
    public static void main(String[] args) {
        int[] arr = new int[] {25,11,0,9,35,14,7};  
        for(int i =0;i<arr.length;i++){   
        for(int j =i+1;j<arr.length;j++){ 
        int tmp = 0;  
        if (arr[i] > arr[j]){   
        tmp = arr[i];  
        arr[i] = arr[j];  
        arr[j] = tmp;  
            }
        }
        System.out.print(" "+arr[i]);
    }  
    }
}
