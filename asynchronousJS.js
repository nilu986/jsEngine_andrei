// Promise with setTimeout
/* const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Done!!!');
  } else {
    reject('error!!!');
  }
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'Anil');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'Neerja');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'Deeshu');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 750, 'Ravish');
});

Promise.allSettled([promise, promise1, promise2, promise3, promise4]).then(
  (values) => console.log(values)
);

Promise.all([promise, promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

Promise.race([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
 */

//Promise with fetch api

const urls = [
  'https://jsonplaceholder.typicode3.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
  'https://jsonplaceholder.typicode.com/users',
];

/* Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
).then((results) => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});

Promise.race(urls.map((url) => fetch(url).then((res) => res.json()))).then(
  (result) => console.log(result)
);

Promise.allSettled(
  urls.map((url) => fetch(url).then((resp) => resp.json()))
).then((results) => results.forEach((res) => console.log(res))); */

//Async await- no more then is used, clean code and sequence
try {
  const getData = async () => {
    const data = await Promise.all(
      urls.map((url) => {
        return fetch(url);
      })
    );
    data.forEach((dt) => console.log(dt.json));
  };
  getData();
} catch (err) {
  console.log('oops', err);
}
