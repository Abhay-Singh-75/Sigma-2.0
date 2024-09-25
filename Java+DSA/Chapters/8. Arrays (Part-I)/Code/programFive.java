// Binary Search Program

import java.util.*;
public class programFive {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int arr[] = { 2, 4, 6, 8, 10, 12, 14, 16 };
        System.out.print("Enter the value of key: ");
        int key = sc.nextInt();

        System.out.println("Index for key is: " + bnrySrch(arr, key));
        sc.close();
    }

    public static int bnrySrch(int arr[], int key) {
        int start = 0, end = arr.length - 1;

        while (start <= end) {
            int mid = (start + end) / 2;

            if (arr[mid] == key) {
                return mid;
            } else if (key > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
}
