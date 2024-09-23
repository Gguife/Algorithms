public class SimpleArraySum {
  
  public static int simpleArraySum(int[] ar){
    int sum = 0;

    for(int i = 0; i < ar.length; i++){
      sum += ar[i];
    }

    return sum;
  }

  public static void main(String[] args) {
    int[] array = {1, 2, 3};
    
    int sumArray = simpleArraySum(array);
    System.out.println("A soma do array é: " + sumArray);
  }

}
