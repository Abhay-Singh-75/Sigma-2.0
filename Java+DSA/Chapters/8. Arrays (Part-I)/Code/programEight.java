public class programEight {
    
    public static void main(String[] args){
        int arr[] = {2,4,6,8,10};
        int size = arr.length;
        subArray(arr, size);
    }

    public static void subArray(int arr[], int size){
        int sum=0;
        // int len = (size*(size+1))/2;
        // int sumArr[] = new int[len];
        for(int i=0; i<size; i++){
            for(int j=i; j<size; j++){
                for(int k=i; k<=j; k++){
                    System.out.print(arr[k] + " ");
                    sum += arr[k];
                }
                
                System.out.print("(Sum = " + sum + ")");
                sum = 0;
                System.out.println();
            }
            System.out.println();
        }

        // printArr(sumArr);
    }

    // public static void printArr(int arr[]){
    //     for(int i=0; i<arr.length; i++){
    //         System.out.print(arr[i] + " ");
    //     }
    // }


}
