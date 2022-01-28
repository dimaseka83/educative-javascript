const orderCoffe = callback => {
  let coffee = null;
  console.log("Sedang membuat kopi, silahkan tunggu...");

  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
}

orderCoffe(coffee => {
  console.log(coffee);
})