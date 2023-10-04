// stack(Primitive) Copy and heap ( non primitive) reference 


let ytname="mayank.com"
let anothername=ytname //copy 
anothername="chai"

console.log(ytname);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi :"user@bl"
}
let userTwo= userOne

userTwo.email="mayank@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);


// heap me refereence same hota hai 

// primitive me stack ke andar jaaefa usme copy milega 
// heap me values rakhte hai to reference milta hain 
// koi bhi changes krte hai vo real value me krte hai 