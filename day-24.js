function solution() {
  for(let i= 0; i < arguments.length; i++) {
   for(let j = i + 1 ; j < arguments.length; j++)
     if( arguments[i] === arguments[j]) {
      return true;
     }
  }
  return false;
}


//Second task

function last(list){
  let lastArg = arguments[arguments.length - 1];
  return lastArg[lastArg.length - 1] || lastArg;
}
