// Pairs in an array

import java.util.*;
public class programSeven {
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of an array: ");
        int size = sc.nextInt();
        int arr[] = new int[size];
        for(int i=0; i<size; i++){
            System.err.print("Enter the elements in an array: ");
            arr[i] = sc.nextInt();
        }

        pairArray(arr, size);
        sc.close();
    }

    public static void pairArray(int arr[],int size){
        for(int i=0; i<size; i++){
            for(int j=i+1; j<size; j++){
                System.out.print("(" + arr[i] + "," + arr[j] + ") ");
            }
            System.out.println();
        }
    }
}
