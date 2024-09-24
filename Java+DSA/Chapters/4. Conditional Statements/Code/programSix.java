import java.util.*;


public class programSix {
    public static void main(String [] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the 1st number:");
        int num1 = sc.nextInt();

        System.out.println("Enter the 2nd number:");
        int num2 = sc.nextInt();

        System.out.print("Enter your Choice:\n'+' for Addition.\n'-' for Substraction.\n" );
        System.out.print("'*' for Miulitplication.\n'/' for Division.\n'%' for Modulus.\n");
        char ch = sc.next().charAt(0);
        
        
        switch (ch) {
            case '+':
                System.out.println(num1 + num2);
                break;
            case '-':
                System.out.println(num1 - num2);
                break;
            case '*':
                System.out.println(num1 * num2);
                break;
            case '/':
                System.out.println((float) (num1 / num2));
                break;
            case '%':
                System.out.println(num1 % num2);
                break;        
            default:
                System.out.print("Enter the Correct Choice.");
        }
        sc.close();
    }
}