let a = 5;
let b = 4;

console.log("let a: ", a, typeof a);
console.log("let b: ", b, typeof b);

if(a==b) {
  console.log("Match: a and b are same");
}

else {
  console.error("No Match: a and b are not same");
}


let x = 5;
let y = 5;

console.log("let x: ", x, typeof x);
console.log("let y: ", y, typeof y);

if(x==y) {
  console.log("Match: x and y are same");
}

else {
  console.error("No Match: x and y are not same");
}

let m = 5;
let n = "5";

console.log("let m: ", m, typeof m);
console.log("let n: ", n, typeof n);

if(m==n) {
  console.log("Match: m and n are same");
}

else {
  console.error("No Match: m and n are not same");
}

let z = 5;
let w = "5";

console.log("let z: ", z, typeof z);
console.log("let w: ", w, typeof w);
// triple equal checks for absolute equality
if(z===w) {
  console.log("Match: z and w are same");
}

else {
  console.error("No Match: z and w are not same");
}

