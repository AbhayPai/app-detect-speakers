let initial = 1;

const showNumber = () => {
  let render = '';
  render += `${initial}`;
  document.querySelector('#app').innerHTML = render;
};

const addNumber = (number) => {
  return new Promise((resolve, reject) => {
    if(typeof number !== 'number')
      reject('Error: number should be type of number');
    else {
      initial += number;
      resolve();
    }
  });
};

showNumber();

window.showNumber = showNumber;
window.addNumber = addNumber;

// Example of promise all
const promise1 = Promise.resolve('Am Promise 1');
const promise2 = 'Hello, am promise 2';
const promise3 = 3;

window.promise1 = promise1;
window.promise2 = promise2;
window.promise3 = promise3;

// Example for async and await
// async function showUsers() {
//   const usersXHR = await fetch('https://jsonplaceholder.typicode.com/users/');
//   const usersData = await usersXHR.json();

//   // eslint-disable-next-line no-console
//   console.log(usersData);
// }
// window.showUsers();
