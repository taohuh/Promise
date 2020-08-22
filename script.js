
function sayHello() {
  delayES8(1000)
    .then(() => console.log('hello'))
    .catch((error) => console.error(error));

  delay('string')
    .then(() => console.log('hello'))
    .catch((error) => console.error(error));
}

async function delayES8(time) {
  // This function return a promise!
  await delay(time);
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