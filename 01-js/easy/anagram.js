/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//Brute Force Approach using sorting:

/* function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s/g,'');
  str2 = str2.toLowerCase().replace(/\s/g,'');

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2;
}
*/

//Better Approach using Hashmap:

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const charMap = {};

    for(const char of str1){
      if(!charMap[char]){
        charMap[char]=0;
      }
      charMap[char]++;
    }
    for(const char of str2){
      if(!charMap[char]){
        return false;
      }
      charMap[char]--;
    }
    return Object.values(charMap).every((val)=>val===0);
}

module.exports = isAnagram;
