package list1;

public class ClassA{
   public static void main(String[] args) {
    int [] arr = {2,3,5,6,8,9,7,8};
    System.out.println("odd numbers");
    for(int i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            System.out.println(arr[i]);
        }
    }
    System.out.println("Even number");
    for(int i=0;i<arr.length;i++){
        if(arr[i]%2 == 0){
           System.out.println(arr[i]);
        }
    }
   }
}