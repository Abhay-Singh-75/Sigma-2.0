public class programTwo {
    public static void main(String[] args) {
        // Printing the inverted patterm
        /*
        ****
        ***
        **
        *
         */
        for(int i=4; i>=1; i--){
            for(int j=i; j>=1; j--){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}