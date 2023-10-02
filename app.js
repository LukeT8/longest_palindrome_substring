"use strict";

// input is the given string
var input = "33368088588086";
console.log("input is " + input);

function isPalindrome(str) {
  // Function to check if a string is a palindrome
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// "ab", "abc", "abcd"...etc.
function findLongestPalindrome(input) {
  let longestPalindrome = "";
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      const substring = input.substring(i, j);
      if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
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
