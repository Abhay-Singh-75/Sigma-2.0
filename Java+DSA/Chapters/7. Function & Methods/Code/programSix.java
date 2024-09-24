import java.lang.Math;

public class programSix {
    // Conversion of Binary number to Decimal number
    public static int Bin_to_Dec(int num){
        int dec = 0;
        int pow = 0;
        while(num > 0){
            int lstDgt = num%10;
            dec = dec + (lstDgt * (int)Math.pow(2,pow));
            pow++;
            num = num/10;
        }
        return dec;
    }

    public static void main(String[] args){
        System.out.println("The binary number in decimal number is: " + Bin_to_Dec(1010));
    }
}
