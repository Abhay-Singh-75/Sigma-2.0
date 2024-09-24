public class programNine {
    public static void main(String[] args){
        diamond(5);
    }   
    
    public static void diamond(int row){
        for(int i=1; i<=row; i++){

            for(int j=1; j<=row-i; j++){
                System.out.print(" ");
            }

            for(int j=1; j<=(i*2)-1; j++){
                System.out.print("*");
            }
            System.out.println();
        }

        for(int i=row; i>=1; i--){

            for(int j=row-1; j>=i; j--){
                System.out.print(" ");
            }
            for(int j=(i*2)-1; j>=1; j--){
                System.out.print("*");
            }

            
            System.out.println();
        }
    }
}
