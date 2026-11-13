//* Literal Type
type Status = "pending"
const status : Status = "pending"
console.log("status");
//  Basic Union

type Identity = string | number
const id : Identity ="347838744"

console.log(id);
// Literal Union
type Role = "user" | "admin"
const userRole : Role ="admin"
// Object Union 