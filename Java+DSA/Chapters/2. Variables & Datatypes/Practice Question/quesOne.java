import java.util.*;

//Average of 3 numbers.
public class quesOne {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int num3 = sc.nextInt();
        int avg = (num1 + num2 + num3)/3;
        
        System.out.println("The average of three nummber is: " + avg);
    }
}