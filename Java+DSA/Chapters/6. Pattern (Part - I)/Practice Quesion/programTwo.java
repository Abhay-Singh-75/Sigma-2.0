public class programTwo {
    // public static void main(String[] args){
    //     int star=0;
    //     for(int i=1;i<=4; i++){
    //         for(int j=4; j>i; j--){
    //             System.out.print(" ");
    //         }
    //         for(star=0; star<i; star++){
    //             System.out.print("*");
                
    //         }
    //         System.out.println();
    //     }
    // }

    public static void main(String[] args){
        inv_half_pyramid(7);
    }

    public static void inv_half_pyramid(int num){
        int star = 0;
        for(int i=1; i<=num; i++){
            for(int j=num; j>i; j--){
                System.out.print(" ");
            }

            for(star=0; star<i; star++){
                System.out.print("*");            
            }
            System.out.println();
        }
    }
}
