//singleton method to create obj
// Object.create


// object Literal
const JsUser={
    name:"Mayank",
    age:18,
    location:"Delhi",
    email:"mayankrawat@google.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}
console.log(JsUser.age)
console.log(JsUser["age"])
console.log(JsUser["name"])
console.log(typeof JsUser.location)
console.log(JsUser["location"])

JsUser.email="mayankrawat@chatgpt.com"
// Object.freeze(JsUser)   // ab yeh change ni hhogi upar wale 


JsUser.email="mayankrawat@microsoft.com"
console.log(JsUser);     // add an object