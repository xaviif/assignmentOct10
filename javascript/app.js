//
/*
function getFirstVal(x){
  return x[0]
}
*/
const getFirstValue = x => x[0];
let array = [20,2110,202,02]

const convertMinsToSecs = x => x * 60;
const minutes = 5;

const lessThan100 = (x) =>{
  let count = 0;
  for(let i in x){
    count += x[i];
  }
  return (count < 100) ? false : true;
}

const numbers = [20,210, 1, 2, 20, 20, 3, 4, 5];

let build = "";
build += `getFirstVal: [${array}] returns ${getFirstValue(array)} <br>`
build += `convertMinsToSecs: ${minutes} returns ${convertMinsToSecs(minutes)} <br>`
build += `lessThan100: [${numbers}] returns ${lessThan100(numbers)}`
//alert(getFirstValue(firstArg))

document.body.innerHTML = build;