import java.util.*;

public class programTwo {
    public static void main(String[] args) {
        // Printing a number from 1 to N.
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        int count = 1;
        while(count <= num) {
            System.out.println(count);
            count++;
        }

        sc.close();
    }
}
