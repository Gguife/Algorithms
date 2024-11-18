// Array Reverse

function reverse(arr) {
  const n = arr.length;
  const temp = new Array(n);

  for(let i = 0; i < n; i++){  
    temp[i] = arr[n - i - 1];
  }

  return temp;
}



function main() {
  const arr = [5, 4, 3, 2, 1];
  console.log("Revertendo array: " + reverse(arr));
}

main();