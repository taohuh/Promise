
function sayHello() {
  delay(1000)
    .then(() => console.log('hello'))
    .catch((error) => console.error(error));

  delay('string')
    .then(() => console.log('hello'))
    .catch((error) => console.error(error));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('delay requires a valid number'));
    }
    setTimeout(resolve, time);
  });
}

sayHello();