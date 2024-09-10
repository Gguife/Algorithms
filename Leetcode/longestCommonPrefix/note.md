# Longest Common Prefix
Neste desafio do LeetCode, devemos escrever uma função para encontrar a string de prefixo comum entre uma matriz de strings.
- Se não houver um prefixo comum, retorne uma string vazia "".

---

### Example 1:
Input: strs = ["flower","flow","flight"] </br>
Output: "fl"

---

### Example 2:
Input: strs = ["dog","racecar","car"]</br>
Output: ""


## Ideia de resolução

```
function longestCommonPrefix(strs) {
  if(strs.length === 0) return "";

  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  let i = 0;
  while(i < first.length && i < last.length && first[i] === last[i]){
    i++;
  }

  return first.substring(0, i);
}
```

1. Verificamos se o array se encontra vazio.
2. Ordenamos o array de strings que recebemos, `sort()` ordena as palabras em ordem alfabética.
3. Guardamos em variáveis a primeira e a ultima palavra.
4. Encontramos o prefixo comum.
5. Retornamos o prefixo comum.


## Outro modo de resolver
```
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }

  return prefix;
};
```