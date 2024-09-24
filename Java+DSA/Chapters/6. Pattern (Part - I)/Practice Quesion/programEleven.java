public class programEleven {
    
    public static void main(String[] args){
        palidromic(6);
    }

    public static void palidromic(int num){

        for(int i=1; i<=num; i++){

            for(int j=1; j<=num-i; j++){
                System.out.print("  "); //  Two bytes spaces here.
            }
            
            int counter = i;

            for(int j=1; j<=i; j++){
                System.out.print(counter + " ");
                counter--;
            }        

            int _counter = 2;

            for(int j=2; j<=i; j++){
                System.out.print(_counter + " ");
                _counter++;
            }
            System.out.println();
        }
    }
}
