import java.util.*;

public class programOne{

    public static int product(int a, int b){
        int prod = a * b;
        return prod;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int num1 = sc.nextInt();
        System.out.print("Enter second number: ");
        int num2 = sc.nextInt();
        int product = product(num1, num2);
        System.out.println("The product of two products is: " + product);
        sc.close();
    }
}