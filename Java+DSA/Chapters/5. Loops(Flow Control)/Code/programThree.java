import java.util.*;

public class programThree {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        int count = 1;
        int sum = 0;

        while(count <= num) {
            sum += count;
            count++;
        }
        System.out.println(sum);
        sc.close();
    }    
}
