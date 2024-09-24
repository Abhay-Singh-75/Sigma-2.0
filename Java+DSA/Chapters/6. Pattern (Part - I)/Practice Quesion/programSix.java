
public class programSix {
    public static void main(String[] args){
        butterfly(4);
    }

    public static void butterfly(int num){

        for(int i=1; i<=num; i++){
            
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            for(int j=1; j<=num-i; j++){
                System.out.print(" ");
            }

            for(int j=1; j<=num-i; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        for(int i=1; i<=num; i++){

            for(int j=num; j>=i; j--){
                System.out.print("*");
            }
            for(int j=1; j<i; j++){
                System.out.print(" ");
            }

            for(int j=1; j<i; j++){
                System.out.print(" ");
            }
            for(int j=num; j>=i; j--){
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
