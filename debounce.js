// var timer;
// var debounce = (func, delay) => {
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   }
// }

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}

function sayHello() {
  console.log('My name is', this.name)
}

const amy = {
  name: 'amy',
  speak: debounce(sayHello),
}

amy.speak();
amy.speak();
debounce(sayHello),
debounce(sayHello),
amy.speak();


// debounce(()=> console.log('test'), 100)();
// debounce(()=> console.log('test2'), 500)();
// debounce(() => console.log('test4'), 50)();
// debounce(()=> console.log('test3'), 50)();


