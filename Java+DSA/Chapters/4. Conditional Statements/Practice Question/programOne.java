import java.util.*;

public class programOne{
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter the number: ");
    int num = sc.nextInt();

    if(num >= 0){
        System.out.println("The number you entered is positive.");
    }   else {
        System.out.println("The number you entered is negative.");
    }


        sc.close();
    }
}