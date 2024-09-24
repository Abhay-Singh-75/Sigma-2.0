
public class programFive{
    public static void main(String[] args){
        tri_pattern(5);
    }

    public static void tri_pattern(int num){

        for(int i=1; i<=num; i++){
            for(int j=1; j<=i; j++){
                if((i+j)%2 == 0){
                    System.out.print("1" + " ");
                }   else{
                    System.out.print("0" + " ");
                }
            }
            System.out.println();
        }
    }
}