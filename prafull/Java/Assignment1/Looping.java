
public class Looping {
    public static void main(String[] args) {
        int sum = 0;
        for(int j=1;j<=10;j++){
            sum = sum+j;
        }
            System.out.println("The sum of number: "+sum);

            System.out.println("-------------------------");

            for(int i=0;i<4;i++){
                for(int j=0;j<=i;j++){
                    System.out.print("* ");
                }
                System.out.println();
            }
            System.out.println("---------------Pyramid----------------------");

              for(int i=0;i<=4;i++){
                for(int j=4;j>=i;j--){
                    System.out.print(" ");
                }
                for(int k=1;k<=i;k++){
                    System.out.print("* ");
                }
                System.out.println();
              }


              System.out.println("----While Loop using 2 table--------");

              int i=1;
              int num = 2;
              while(i<=10){
                System.out.println(num*i);
                i++;
              }
              System.out.println("---Do while Loop----");
             int arr [] = {2,11,22,45};

             int g=0;

             do{
                System.out.println(arr[g]);
                g++;
             }
             while(g<4);

            }
        }
            
    

