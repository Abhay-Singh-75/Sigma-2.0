public class programFour {
    public static void main(String[] args){
        // int pt = 1;
        // for(int i=1; i<=5; i++){
        //     for(int j=1; j<=i; j++){
        //         System.out.print(pt + " ");
        //         pt++;
        //     }
        //     System.out.println();
        // }

        floyd_triangle(5);
    }

    public static void floyd_triangle(int num){
        int counter=1;
        for(int i=1; i<=num; i++){
            for(int j=1; j<=i; j++){
                System.out.print(counter + " ");
                counter++;
            }
            System.out.println(" ");
        }
    }
}
