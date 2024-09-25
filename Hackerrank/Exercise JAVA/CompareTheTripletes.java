public class CompareTheTripletes {
  
  
  public static int[] compare(int[] a,  int[] b){
    int aliceScore = 0;
    int bobScore = 0;
    
    for(int i = 0; i < 3; i++){
      if(a[i] > b[i]){
        aliceScore += 1;
      }
      if(a[i] < b[i]){
        bobScore += 1;
      }
    }
    
    return new int[]{aliceScore, bobScore};
  }
  

  public static void main(String[] args) {
    int[] a = {0, 1, 3};
    int[] b = {3, 0, 2};

    int[] score = compare(a, b);

    System.out.println("Pontuação de Alice:" + score[0]);
    System.out.println("Pontuação de Bob:" + score[1]);
  }
}