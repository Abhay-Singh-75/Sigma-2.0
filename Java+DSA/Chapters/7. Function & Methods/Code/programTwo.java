import java.util.*;

public class programTwo {
    
    public static int fact(int num){
        int fact = 1;
        for(int i=1; i<=num; i++){
            fact = fact * i;
        }
        return fact;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        int factorial = fact(num);
        System.out.println("The factorial of number is: " + factorial);

        sc.close();
    }
}
