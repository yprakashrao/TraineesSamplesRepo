package Assignment7;

public class Duplicate {
    public static void main(String[] args) {
        int a[] = new int[] {1,2,3,2,4,5,6,4,3};
        for(int i=0;i<a.length;i++){
            for(int j=i+1;j<a.length;j++){
                if(a[i]==a[j]){
                 System.out.print(" "+a[j]);
                }
            }
        }

    }
}
