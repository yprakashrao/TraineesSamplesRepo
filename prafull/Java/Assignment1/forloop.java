public class forloop{
    public static void main(String[] args) {
        for(int i=1;i<=5;i++){
            for(int j=1;j<=i;j++){
                System.out.print("* ");
            }
            System.out.println();
        }
            System.out.println("*************pyramid*****************");
            for(int r=1;r<=5;r++){
            for(int c=5;c>=r;c--){
                System.out.print("* ");
            }
            System.out.println();
            }
        
        for(int p=1;p<=3;p++){
            for(int q=1;q<=3;q++){
                if(p==2 && q==2){
                   break; 
                }
                System.out.println(p+" "+q);
            }
        }
          
        }
    }

