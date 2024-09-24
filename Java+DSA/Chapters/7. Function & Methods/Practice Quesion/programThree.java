import java.util.*;

public class programThree {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        palindrome(num);

        sc.close();
        }

    public static void palindrome(int num){
        int n = num;
        int rev = 0;
        while(n>0) {
            int lstDgt = n%10;
            rev = rev*10 + lstDgt;
            n = n/10;
        }
        
        if(num == rev){
            System.out.println("The number you entered is palindrome.");
        }   else{
            System.out.println("The number you entered is not a palindrome.");
        }
    }
}
