"use strict";


// input is the given string
var input = "33368088588086";
console.log("input is " + input);

function findLongestPalindrome(input) {
  const len = input.length;
  if (len <= 1) {
    return input;
  }

  // Initialize a table to store the results of palindrome checks.
  const isPalindromeTable = Array(len).fill().map(() => Array(len).fill(false));

  // All substrings of length 1 are palindromes.
  for (let i = 0; i < len; i++) {
    isPalindromeTable[i][i] = true;
  }

  let longestPalindrome = input[0];
  let maxLength = 1;

  // Check for palindromes of length 2 or more from the back
  for (let start = len - 2; start >= 0; start--) {
    for (let end = start + 1; end < len; end++) {
      if (input[start] === input[end]) {
        // If the characters at start and end match and the substring
        // between them is a palindrome, mark it as a palindrome.
        if (end - start === 1 || isPalindromeTable[start + 1][end - 1]) {
          isPalindromeTable[start][end] = true;
          if (end - start + 1 > maxLength) {
            // Update the longest palindrome found so far.
            maxLength = end - start + 1;
            longestPalindrome = input.substring(start, end + 1);
          }
        }
      }
    }
  }

  return longestPalindrome;
}


const longestPalin = findLongestPalindrome(input);
console.log("Longest palindrome is: " + longestPalin);


// function runWithStdin() {
//   let input = "";
//   process.stdin.resume();
//   process.stdin.setEncoding("utf8");

//   process.stdin.on("data", v => {
//     input += v;
//   });
//   process.stdin.on("end", () => {
//     main(input.split("\n"));
//   });
// }

// runWithStdin();
