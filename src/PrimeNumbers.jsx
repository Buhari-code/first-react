import React, { useState } from "react";

function PrimeNumberFinder() {
  const [range, setRange] = useState({ start: 1, end: 100 });
  const [primes, setPrimes] = useState([]);

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // If divisible by any number other than 1 and itself
    }
    return true;
  };

  // Function to find primes in a given range
  const findPrimes = () => {
    const primeNumbers = [];
    for (let i = range.start; i <= range.end; i++) {
      if (isPrime(i)) primeNumbers.push(i);
    }
    setPrimes(primeNumbers);
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRange({ ...range, [name]: parseInt(value, 10) });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Prime Number Finder</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Start:{" "}
          <input
            type="number"
            name="start"
            value={range.start}
            onChange={handleInputChange}
          />
        </label>
        <label style={{ marginLeft: "10px" }}>
          End:{" "}
          <input
            type="number"
            name="end"
            value={range.end}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={findPrimes} style={{ padding: "5px 15px" }}>
        Find Primes
      </button>
      <h2>Prime Numbers:</h2>
      <div>
        {primes.length > 0 ? (
          primes.map((prime, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {prime}
            </span>
          ))
        ) : (
          <p>No primes found</p>
        )}
      </div>
    </div>
  );
}

export default PrimeNumberFinder;
