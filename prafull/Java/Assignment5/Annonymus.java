abstract class Annonymus{
abstract void show();
}
 class Innerclass{
    public static void main(String[] args) {
     Annonymus obj = new Annonymus(){
     void show(){
        System.out.println("Nice fruit");
     }
     };
     obj.show();
    }
}

