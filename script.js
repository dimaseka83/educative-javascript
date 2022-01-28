const executorFunction = (resolve, reject) => {
  const isCoffeMakerReady = false;
  if (isCoffeMakerReady) {
      resolve("Kopi berhasil dibuat");
  }else{
    reject("Mesin kopi tidak bisa digunakan");
  }
}

const makeCoffe = () => {
  return new Promise(executorFunction);
}

const coffeePromise = makeCoffe();
console.log(coffeePromise);