import java.util.*;

public class programFive {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();

        if( A>B && A>C){
            System.out.println("A is greater than B and C.");
        }   else if (B>C && B>A) {
            System.out.println("B is greater than A and C.");
        } else{
            System.out.println("C is greater tha A and B");
        }

        
        sc.close();
    }
}