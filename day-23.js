//first task  https://www.codewars.com/kata/unpacking-arguments/train/javascript

function spread(func, args) {
  return  func(...args);
}


//second task https://www.codewars.com/kata/for-the-sake-of-argument


const numbers = (...a) => a.every(n => typeof n === 'number' );
