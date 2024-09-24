

public class programFive {

public static boolean isPrime(int num){
    for(int i=2;i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

public static void primeRange(int num){
    for(int i=1; i<=num; i++){
        isPrime(i);
        if(isPrime(i) == true){
            System.out.print(i + " ");
        }
    }
}
    public static void main(String[] args){
        primeRange(10);
        
    }
    
}
