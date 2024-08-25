/** 
 * Give 2 string, write a function to determine if the second string is an anagram of the first.
 * An angram is a word, phrase or name formed by rearranging the letters of another, such as cinema,
 * formed from iceman.
 * 
 * validAnagram('aaz', 'zza') //false
 * validAnagram('awesome, 'awesome');
*/

function validAnagram(string1 = '', string2='') {

  if(string1 == string2) return true;
  if(string1.length != string2.length) return false;

  let frequencyOfString1 = {};
  let frequencyOfString2 = {};

  frequencyOfString1 = _getFrequency(string1);
  frequencyOfString2 = _getFrequency(string2);

  for(key in frequencyOfString1) {
    if(frequencyOfString1[key] != frequencyOfString2[key]) {
      return false;
    }
  }

  return true;
}

function _getFrequency(stringInput = '') {
  let frequency = {};
  for(let i=0; i<stringInput.length; i++) {
    let char = stringInput[i];
    frequency[char] ? frequency[char] +=1 : frequency[char] = 1;
  }

  return frequency;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram') )// true
console.log(validAnagram("rat","car") )// false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt') )// true
console.log(validAnagram('texttwisttime', 'timetwisttext'))//true