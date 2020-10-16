/**
 * SlowMath Library
 * Covalence, LLC
 */
let slowMath = (function() {
    const wait = (delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });
    };

    // slowMath.add(val1, val2)- Returns a Promise that waits 1 second, 
    // and then resolves with the result of adding val1 and val2. Rejects if val1 or val2 are negative numbers.
    function add(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(+a + +b);
            } else {
                return Promise.reject(new Error(`Error adding values ${a} and ${b}.`));
            }
        });
    }

    // slowMath.subtract(val1, val2)- Returns a Promise that waits 1 second, 
    // and then resolves with the result of subtracting val1 and val2. Rejects if val1 or val2 are negative numbers.
    function subtract(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            } else {
                return Promise.reject(new Error(`Error subtracting values ${a} and ${b}.`));
            }
        });
    }
    
    // slowMath.multiply(val1, val2)- Returns a Promise that waits 1 second, 
    // and then resolves with the result of multiplying val1 and val2. Rejects if val1 or val2 are negative numbers.
    function multiply(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            } else {
                return Promise.reject(new Error(`Error multiplying values ${a} and ${b}.`));
            }
        });
    }
    
    // slowMath.divide(val1, val2)- Returns a Promise that waits 1 second, 
    // and then resolves with the result of dividing val1 by val2. Rejects if val1 or val2 are negative numbers, or if val2 is zero.
    function divide(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            } else if (shouldResolve) {
                return Promise.resolve(a / b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b}.`));
            }
        });
    }
    
    // slowMath.remainder(val1, val2)- Returns a Promise that waits 1 second, and then resolves with the remainder after dividing val1 by val2.
    //  Rejects if val1 or val2 are negative numbers, or if val2 is zero.
    function remainder(a, b) {
        return wait(1000)
        .then(() => {
            return negativeCheck(a, b);
        }).then((shouldResolve) => {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            } else if (shouldResolve) {
                return Promise.resolve(a % b);
            } else {
                return Promise.reject(new Error(`Error dividing ${a} by ${b} for remainder.`));
            }
        });
    }

    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }

    return { add, subtract, multiply, divide, remainder };
})();


