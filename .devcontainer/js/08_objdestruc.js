// objectr destructure

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Mayank"
}
// course.courseInstructor
//baar baar krna padta hai yeh sb

// const {courseInstructor} =course
// console.log(courseInstructor);      


const {courseInstructor:ci} =course
console.log(ci); //agr hume value rename krne hai :ci


// {
//     "name" : "mayank",
//     "coursename" : "js in hinsi",
//     "price" : "free"
// }                 this is json format


// arrays api
[
    {},
    {},
    {}
]
 