

class SolveMeFirst {
  
  private Integer number1;
  private Integer number2;

  public SolveMeFirst ( Integer number1, Integer number2){
    this.number1 = number1;
    this.number2 = number2;
  }

  public Integer sum(){
    return number1 + number2;
  }

  public static void main(String[] args) {
    SolveMeFirst solve = new SolveMeFirst(7, 3);

    System.out.println("A soma é: " + solve.sum());
  }
}