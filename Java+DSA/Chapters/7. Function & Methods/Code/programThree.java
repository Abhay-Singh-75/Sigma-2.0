import java.util.*;

public class programThree {

    public static int Fact(int num){
        int factN =1;
        for(int i=1; i<= num; i++){
            factN = factN * i;
        }
        return factN;
    }
    
    public static int fact(int num, int r){
        int sub = num - r;
        int fact = 1;
        for(int i=1; i<=sub; i++){
            fact = fact * i;
        }
        return fact;
    }

    

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();
        System.out.print("Enter the value of r: ");
        int r = sc.nextInt();
        int factorial = (Fact(n) / ( Fact(r) * fact(n,r)));
        System.out.println("The binomial Coefficient is: " + factorial);
        sc.close();
    }
    
}
