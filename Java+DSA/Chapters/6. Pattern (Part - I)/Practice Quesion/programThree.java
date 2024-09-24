public class programThree {
    public static void main(String [] args){
        
        // for(int i=1; i<=5; i++){
        //     for(int j=1; j<=6-i; j++){
        //         System.out.print(j + " ");
        //     }
        //     System.out.println();
        // }

        inv_half_pyramid(5);
    }

    public static void inv_half_pyramid(int num){

        for(int i=1; i<=num; i++){
            for(int j=1; j<=num+1-i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }
}
