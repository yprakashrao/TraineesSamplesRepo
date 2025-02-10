package Assignment7;
import java.lang.String;
public class Javatpoint {
        private int i;
        Javatpoint(){}
            Javatpoint(int i){
                this.i=i;
            }
            public int getvalue(){
                return i;
            }
            public void setvalue(int i){
                this.i=i;
            }
            public String toString(){
                return Integer.toString(i);
            }
    public static void main(String[] args) {
        Javatpoint obj = new Javatpoint(12);
        System.out.println(obj);
    }
}