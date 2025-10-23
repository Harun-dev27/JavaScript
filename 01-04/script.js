let x = "red";

console.log(x)

function change_to_blue () {
  let  inside_x = "blue";
  console.log("Inside function data: " + inside_x)
}
 change_to_blue(); // without calling this function, the change will not be effective.

 console.log("Inside function data: " + inside_x) // this shows error because it is a local variable
 console.log(x)