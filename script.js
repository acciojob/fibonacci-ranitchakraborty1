function fibonacci(num) {
// your code here
	  if (n === 0) return 0;
    if (n === 1) return 0;  // For 1st Fibonacci number in the 0-indexed sequence, it's 0
    if (n === 2) return 1;  // For 2nd Fibonacci number in the 0-indexed sequence, it's 1

    // Initialize the first two Fibonacci numbers
    let a = 0, b = 1;

    // Compute Fibonacci numbers from 3 to n
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Return the nth Fibonacci number
    return b;
}

// Example usage
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
	
}

module.exports = fibonacci;
