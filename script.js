const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

names.forEach((name) => {
    console.log(`Hello, ${name}!`);
});
// Model Break atau Continue
console.log("Batas");
for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Jeff') continue;
    console.log(`Hello, ${names[i]}!`);
}