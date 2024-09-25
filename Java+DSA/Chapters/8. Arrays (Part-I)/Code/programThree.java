// Linear Search

import java.util.*;

public class programThree {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Eneter the size of an array: ");
        int size = sc.nextInt();

        int arr[] = new int[size];
        for (int i = 0; i < size; i++) {
            System.out.print("Enter the value: ");
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter the key to find:");
        int key = sc.nextInt();

        int result = linearSearch(arr, key);

        if ((result == -1)) {
            System.out.println("Key not found");
        } else {
            System.out.println("Key found at location " + result);
        }

        sc.close();
    }

    public static int linearSearch(int arr[], int key) {

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }
}
