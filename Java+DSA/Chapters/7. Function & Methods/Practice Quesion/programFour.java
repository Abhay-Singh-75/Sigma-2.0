import java.util.Scanner;

public class programFour {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int n = sc.nextInt();
        System.out.println("The sum of digit of number is: " + sumDigit(n));

        sc.close();
    }

    public static int sumDigit(int num){
        int sum = 0;
        while(num > 0){
            int lstDgt = num%10;
            sum = sum + lstDgt;
            num = num/10;
        }
        return sum;
    }
}
