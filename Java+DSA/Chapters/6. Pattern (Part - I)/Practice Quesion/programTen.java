public class programTen {
    
    public static void main(String[] args){
        pyramid(5);
    }

    public static void pyramid(int num){
        int counter = 1;
        for(int i=1; i<=num; i++){

            for(int j=1; j<=num-i; j++){
                System.out.print(" ");
            }

            for(int j=1; j<=i; j++){
                System.out.print(counter + " ");
            }
            
            counter++;
            System.out.println();
        }
    }
}
