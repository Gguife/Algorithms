// Maximum and Minimum of an array 

function setmini(arr) {
  let min = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }

  return min;
}

function setmaxi(arr) {
  let max = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }

  return max;
}


function main(){
  const arr = [3, 2, 4, 1, 9];
  console.log("Minimum elemente is: " + setmini(arr));
  console.log("Maximum elemente is: " + setmaxi(arr));
}

main();