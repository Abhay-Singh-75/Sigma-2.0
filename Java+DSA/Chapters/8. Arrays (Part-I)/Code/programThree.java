public class programThree {
    
    public static void main(String[] args){

        int arr[] = {2, 4, 6, 8, 10, 12, 14, 16};
        int key = 20;
        int ind = search(arr, key);
        if(ind == -1){
            System.out.println("Not found");
        }else{
            System.out.println("The number is: " + ind);
        }
    }

    public static int search(int arr[], int key){

        for(int i=0; i<arr.length; i++){

            if(arr[i] == key){
                return i;
            }
        }
        return -1;
    }
}
