public class programOne{
    public static void main(String[] args) {
        // Printing star pattern
        /* 
        *
        **
        ***
        ****
         */
        for(int i=1; i<=4; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}