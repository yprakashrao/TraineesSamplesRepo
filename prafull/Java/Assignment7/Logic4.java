package Assignment7;
import java.util.Arrays;
public class Logic4 {
    public static void main(String[] args) {
    int temp;
    int arr[] = {2,3,5,1,6,4};
    for(int i=0;i<arr.length;i++){
        for(int j=i;j<arr.length;j++){
          if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            System.out.print(" "+arr[i]);
          }
        }
    }
}
}
    

