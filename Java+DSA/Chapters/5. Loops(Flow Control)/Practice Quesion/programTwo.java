import java.util.*;
    //Factorial of a number.
public class programTwo {
    public static void main(String [] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        int fact = 1;
        int i=1;
        while(i <= num){
            fact = fact * i;
            i++;
        }
        System.out.println("The factorial of " + num + " is: " + fact);

        sc.close();
    }
}
