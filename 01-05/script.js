const x = "red";

x = "Light blue";

function change_to_blue () {
  let  inside_x = "blue";
  console.log("Inside function data: " + inside_x)
}
 change_to_blue(); // without calling this function, the change will not be effective.
 console.log(x)