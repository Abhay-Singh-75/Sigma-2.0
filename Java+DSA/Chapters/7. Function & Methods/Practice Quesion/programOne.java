import java.util.*;

public class programOne{
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the three number: ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int average = average(a, b, c);
        System.out.println("The average of three number is: " + average);
        sc.close();
    }

    public static int average(int num1, int num2, int num3){
        int avg = (num1+num2+num3)/3;
        return avg;
    }
}