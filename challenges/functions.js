// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function doThisThing(oneParam, twoParam, cb) {
    return cb(`${oneParam}, ${twoParam}`);
}

doThisThing(1, 4, (thing) => {
    console.log(thing);
});


/* Step 2: Create several functions to callback with consume();

  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
  */
 function consume(x, y, cb) {
     return cb(x + y);
 }
 consume(2, 3, (add) => {
    console.log(add)
});

function multiplyNums(x, y, cb) {
    return cb(x * y);
    // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(2, 99, (product) => {
    console.log(product);
});

function greeting(firstname, lastname, cb) {
    return cb(`Hello ${firstname} ${lastname}, nice to meet you!`);
};

greeting(`Mary`, `Frayer`, (greet) =>{
    console.log(greet);
});
// Step 3: Check your work by un-commenting the following calls to consume(): 

consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();