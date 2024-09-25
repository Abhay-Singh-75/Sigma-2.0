// Largest in array

public class programFour {
    
    public static void main(String [] args){

        int arr[] = {2, 4, 6, 8, 10, 12, 14, 16};
        System.out.println("The largest number is: " + getLargest(arr));
    }

    public static int getLargest(int num[]){
        int largest = Integer.MIN_VALUE;  // It gives minimum value which is: -infinity

        for(int i=0; i<num.length; i++){

            if(largest <  num[i]){
                largest = num[i];
            }
        }
        return largest;
    }


}
