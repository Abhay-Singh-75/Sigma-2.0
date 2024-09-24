import java.util.*;

public class programFive {
    //Printing the reverse of a number.

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();

        while(num > 0){
            int lstDgt = num%10;
            System.out.print(lstDgt);
            num = num/10;
        }
        
        sc.close();
    }
    
}
