import java.util.*;

public class programEight{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        if(num == 2){
            System.out.print(num + "is prime number");
        }   else{
            boolean isPrime = true;
            for(int i =2; i<num-1; i++){
                if(num%i == 0){
                    isPrime = false;
                }
            }

            if(isPrime == true){
                System.out.println(num + " is prime number.");
            }   else{
                System.out.print(num + " is not a prime number.");
            }
        }

        sc.close();
    }
}