import java.util.*;

public class programOne{

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int marks[] = new int[50];

        marks[0] = sc.nextInt();
        marks[1] = sc.nextInt();
        marks[2] = sc.nextInt();

        System.out.println("Physics: " + marks[0]);
        System.out.println("Chemistry: " + marks[1]);
        System.out.println("Maths: " + marks[2]);


        sc.close();
    }
}