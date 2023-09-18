
function sumFor(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr){
  let sum = 0;
  let index = arr.length - 1
  while (index >= 0){
    sum += arr[index--];

  }
  return sum;
}

//n : length
function sumRecursion(arr, n){
  if (n === 1) {
    return arr[0];
  }
  return arr[n-1] + sumRecursion(arr, n-1);
}

function sumTheSimpleWay(arr){
  return _.reduce(arr, function(memo, num){return memo + num}, 0)
}

//example arr [1,2,3,4,5] : 15
let lis = [1,2,3,4,5];
console.log(sumFor(lis));
console.log(sumWhile(lis));
console.log(sumRecursion(lis, lis.length));
console.log(sumTheSimpleWay(lis));