# Roman To Integer

Os numeros romanos são representados por diferentes símbolos como: I, V, X, L, C, D e M.

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |


Os algarismos romanos sao geralmente escritos do maior para o menor. No entanto, o número quatro nao é IIII. Em vez disso, o número 4 é escrito como IV. Como um está antes do cinco, subtraí-lo totaliza 4. A mesma coisa acontece com o numero 9, que é escrito IX. Exsitem 3 casos em que a subtraçao pode ser usada:

 -  I pode ser colocado antes de V e X para formar 4 e 9.
 -  X pode ser colocado antes de L e C para formar 40 e 90.
 -  C pode ser colocado antes de D e M para formar 400 e 900.


Dado um algarismo romano, converta-o para um número inteiro.

```
Exemplo 1: 
  Input: s = "III" 
  Output: 3 
  Explanation: III = 3.
```
```
Exemplo 2:
  Input: s = "LVIII" 
  Output: 58 
  Explanation: L = 50, V= 5, III = 3.  
```
```
Exemplo 3:
  Input: s = "MCMXCIV"
  Output: 1994
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```