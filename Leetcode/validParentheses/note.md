# Valid Parentheses
Dada uma String s contendo apenas os caracteres  ``(``, ``)``, ``{``, ``}``, ``[`` e ``]``, devemos determinar se a string de entrada é válida.


A entrada da string é  válida se:<br/>
1. Os colchetes abertos devem ser fechados pelo mesmo tipo de colchetes.
2. Os colchetes abertos devem ser fechados na ordem correta.
3. Cada colchete fechado tem um colchete aberto correspodente ao mesmo tipo.


Example 1:
```
Input: s = "()"
Output: true
```
Example 2:
```
Input: s = "()[]{}"
Output: true
```
Example 3:
```
Input: s = "(]"
Output: false
```
Example 4:
```
Input: s = "([])"
Output: true
```

## Resolvendo problema
```
const isValid = (s) => {
  const stack = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for(let char of s){
    if(pairs[char]){
      stack.push(char);
    }else{
      const lastOpening = stack.pop();
      if(pairs[lastOpening] !== char){
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
```
```
function isValid(s) {
    // Step 1: Edge case - if the string has an odd length, it can't be valid
    if (s.length % 2 !== 0) return false;

    // Step 2: Create a stack to store opening brackets
    const stack = [];

    // Step 3: Create a map to pair the closing brackets with their corresponding opening brackets
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Step 4: Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // Step 5: If it's a closing bracket, check for its matching opening bracket
        if (char in map) {
            // Pop the top element from the stack (if the stack is empty, set topElement to a dummy value)
            const topElement = stack.length ? stack.pop() : '#';

            // Step 6: Check if the popped element matches the corresponding opening bracket
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            // Step 7: If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // Step 8: At the end, the stack should be empty if the string is valid
    return stack.length === 0;
}
```