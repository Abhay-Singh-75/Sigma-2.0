import java.util.*;

public class program {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        if(age >= 18) {
            System.out.println("You are an adult, you can Drive, Vote");
        }
        else{
            System.out.println("You are not an adult");
        }

        sc.close();
    }
}