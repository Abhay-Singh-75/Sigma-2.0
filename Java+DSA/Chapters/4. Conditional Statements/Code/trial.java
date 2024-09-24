import java.util.*;

public class trial{
    public static void main(String [] args) {
        // Checkin ternary Operator.
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        String result = (marks >= 33)? "Pass" : "Fail";
        System.out.print(result);
        sc.close();
    }
}