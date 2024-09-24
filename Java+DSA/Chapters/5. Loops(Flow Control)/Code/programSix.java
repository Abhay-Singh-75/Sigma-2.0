public class programSix {
    // Reversing a number

    public static void main(String[] args){
        int num = 12345;
        int rev = 0;

        while (num > 0) {
            int lstDgt = num%10;
            rev = (rev*10) + lstDgt;
            num = num/10;
        }
        System.out.print(rev);
    }
    
}
