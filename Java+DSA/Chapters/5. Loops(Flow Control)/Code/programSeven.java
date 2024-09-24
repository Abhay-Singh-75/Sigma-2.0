import java.util.*;

public class programSeven {
    // using a break statement.
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        while(true) {
            if(num%10 == 0){
                System.out.println("You entered the number in multiple of 10");
                break;
            }
            System.out.print("The number you entered: ");
            System.out.println(num);
            System.out.println("Enter the number again.");
            num = sc.nextInt();
        }

        sc.close();
    }
    
}
