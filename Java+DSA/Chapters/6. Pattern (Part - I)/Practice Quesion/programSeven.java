public class programSeven {
    
    public static void main(String[] args){
        rhombus(5);
    }

    public static void rhombus(int num){

        for(int i=1; i<=num; i++){

            for(int j=1; j<=num-i; j++){
                System.out.print(" ");
            }

            for(int j=1; j<=num; j++){
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
