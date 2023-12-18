/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   // Convert the string to lowercase and remove all non-alphanumeric characters
  const str1 = str.toLowerCase().replace(/[^a-z0-9]/g,"");
  const n = str1.length;
   // Check if the cleaned string is a palindrome
  for(let i=0;i<n/2;i++){
    if(str1[i] != str1[n-i-1]) return false;
  }
  // If the loop completes without encountering any mismatching characters, the string is a palindrome
  return true;
}

module.exports = isPalindrome;
