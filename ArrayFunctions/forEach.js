// let numbers = [1,2,3]
// numbers.forEach((item,index, array) => {
// console.log(item+2,index,array);
// })

// const nums = [10,15,23,45,22,16]
// let even_nums = nums.filter((nums)=> {return nums %2 == 0})
// console.log(even_nums);

// const fruits = ['banana','orange','pomegranate']
// const uppercase_fruits = fruits.map((fruits) =>fruits.toUpperCase());
// console.log(uppercase_fruits);
// const items = [
//     {name : "Bike", price:100000},
//     {name : "TV", price:40000},
//     {name : "iphone", price:150000}

// ]
// const itemNames = items.map((item) =>item.name);

// console.log(itemNames);
// const priceValues = items.map((item) => item.price);
// console.log(priceValues);
// const raw_prices = [22.445,44.555,99.8999]
// const precise_prices = raw_prices.map((price) =>`₹ ${price.toFixed(2)}`)
// console.log(precise_prices);
// const students =[
//     {name:'sushank', grade:10},
//     {name:'sparsh', grade:75},
//     {name:'nagesh', grade:45},
//     {name:'priya', grade:95}
// ]
// const topStudents = students.find((stud) => stud.grade>80)
// console.log(topStudents)
const numbers = [55,60,70,69]
const allabove = numbers.every(num=>num>50)
console.log( allabove);
