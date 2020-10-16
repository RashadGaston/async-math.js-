document.addEventListener("DOMContentLoaded", function () {
  
    // Add together 6 and 2.
  slowMath
    .add(6, 2)

    .then((sum) => {
      console.log(`Sum of 6 and 2 is ${sum}`);
      return slowMath.multiply(sum, 2);
    })
    
    // Wait on the result, log it, and then multiply the result by 2
    .then((product) => {
      console.log(`Multiply that by 2 to get ${product}`);
      return slowMath.divide(product, 4);
    })

    // Wait on the result, log it, and then divide the result by 4.
    .then((quotient) => {
      console.log(`Divide that number by 4 to get ${quotient}`);
      return slowMath.subtract(quotient, 3);
    })

    // Wait on the result, log it, and then subtract 3 from the result.
    .then((difference) => {
      console.log(`Subtract 3 from that number to get ${difference}`);
      return slowMath.add(difference, 98);
    })

    // Wait on the result, log it, and then add 98 to the result.
    .then((sum) => {
      console.log(`Add 98 to that number to get ${sum}`);
      return slowMath.remainder(sum, 2);
    })

    // Wait on the result, log it, and then find the remainder from dividing the result by 2.
    .then((remainder) => {
      console.log(`The remainder after dividing by 2 is ${remainder}`);
      return slowMath.multiply(remainder, 50);
    })

    // Wait on the result, log it, and then find the remainder from muliply by 50.
    .then((product) => {
      console.log(`Add 50 to that number to get ${product}`);
      return slowMath.remainder(product, 40);
    })

    // Wait on the result, log it, and then find the remainder from dividing the result by 40
    .then((remainder) => {
      console.log(`The remainder after dividing by 40 is ${remainder}`);
      return slowMath.add(remainder, 32);
    })

    // Wait on the result, log it, and then add 32 to the result.
    .then((sum) => {
      console.log(`Add 32 to that number to get ${sum}`); //print final answer
      console.log(`The final result of these operations is ${sum}!`); //Console log final result
    })

    // Add a .catch function to handle any errors that occur. Log the error to the console.
    .catch((err) => {
      console.log("There has been an issue!");
      console.log(err);
    });

});
