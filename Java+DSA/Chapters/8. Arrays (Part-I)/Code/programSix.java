public class programSix {
    
    public static void main(String[] args){
        int num[] = {2, 4, 6, 8, 10, 12, 14, 16};
        int size = num.length;
        reverse(num, size);
    }

    public static void reverse(int arr[], int size){
        
        int start = 0, end = arr.length-1;

        while (start < end) {
            int temp; 
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            
            start++;
            end--;
        }

        printArray(arr, size);
    }

    public static void printArray(int arr[], int size){
        for(int i=0; i<size; i++){
            System.out.print(arr[i] + " ");
        }
    }
}
