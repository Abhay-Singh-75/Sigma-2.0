import java.util.*;

public class programOne{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt(); //10
        int sumEven= 0;
        int sumOdd = 0;

        for(int i=1; i<=num; i++){ //
            if(i%2 == 0){
                sumEven = sumEven + i; // 2,4,6,8,10 = 30
            } 
            if(i%2 != 0){
                sumOdd = sumOdd + i; // 1,3,5,7,9 = 25
            }
        }
        System.out.println(sumEven + " is the sum of even number.");
        System.out.println(sumOdd + " is the sum of odd number.");

        sc.close();
    }
}