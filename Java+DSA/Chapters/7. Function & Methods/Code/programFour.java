import java.util.*;

public class programFour {

    public static void checkPrime(int num){
        boolean isPrime = true;
        for(int i=2; i<num; i++){
            if(num%i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime == true){
            System.out.println("The number you entered is a prime number.");
        }   else{
            System.out.println("The number you entered is not a prime number.");
        }
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        checkPrime(num);
        sc.close();
    }
    
}
