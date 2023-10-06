// Reduce() method executes a reducer function (that you provide ) on each element of the array, resulting in single output 
// value

// it takes 4 argvument :
// accumulator, current value , index,array



// int his question we 
// sum,product ,avg

// const arr=[18,2,3,4,5,6] 


//sum 
//product
// let sum= arr.reduce( (accu,currvalue ) => {
//     // return accu+currvalue
//     return accu*currvalue
// })
// console.log(sum);

//average 

let arr1=[8,2,8,2]
const avg =arr1.reduce( (accu,currvalue,index,array) =>{
    const total =accu+currvalue
    if (index == array.length-1) {
        return total/array.length;
    }
    return total
})

