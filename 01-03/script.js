var x = "red";

console.log(x)

function change_to_blue () {
    x = "blue";
}
 change_to_blue(); // without calling this function, the change will not be effective.
console.log(x)