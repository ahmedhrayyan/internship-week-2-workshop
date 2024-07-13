function fibonacci(n) {
    // fibonacci using loop and without array
    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        const sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}

// testing the fibonacci function
console.log(fibonacci(5)); // => 5
console.log(fibonacci(10)); // => 55
console.log(fibonacci(20)); // => 6765