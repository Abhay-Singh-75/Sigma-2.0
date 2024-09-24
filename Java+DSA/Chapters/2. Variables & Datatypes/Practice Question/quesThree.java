import java.util.*;

//  Making a bill with using a GST.
public class quesThree {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float pencil = sc.nextFloat();
        float pen = sc.nextFloat();
        float eraser = sc.nextFloat();
        float total = pencil + pen + eraser;
        // Bill without gst. 
        System.out.println("The total bill of all the items is: " + total);
        
        // Bill with 18% Gst.
        total = total + (total*0.18f);
        System.out.println("The bill after including GST is: " + total);
    }
}
