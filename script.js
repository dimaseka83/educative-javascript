// String
const months = ['March', 'Jan', 'Feb', 'Dec'];
const sortM = months.sort();
console.log(sortM);

// Number
const array1 = [1,30,4,15,7,2,9,12,22,25,17,20,10];
const compareNumber = (a,b) => {
    return a - b;
}

const sorting = array1.sort(compareNumber);
console.log(sorting);