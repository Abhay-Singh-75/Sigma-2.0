import java.util.*;

public class programTwo {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        if(isEven(num) == true){
            System.out.println("The number you entered is even.");
        }   else{
            System.out.println("The number you entered is not even.");
        }
        sc.close();
    }

    public static boolean isEven(int num){
        if(num%2 == 0){
            return true;
        }   else{
            return false;
        }
    }
}
