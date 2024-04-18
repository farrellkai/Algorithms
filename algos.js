//uncompress function
const uncompress = (s) => {
  //create number cache
  const numCache = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  //declare let variable for number string and output string
  let numString = '';
  let outputString = '';

  //iterate through characters in input string
  for (let i = 0; i < s.length; i++) {
    //check if current character is a number digit
    if (numCache[s[i]] && !numCache[s[i - 1]]) {
      //reassign numString to current value of i
      numString = s[i];
      //check values of further characters in nested loop
      for (let j = i + 1; j < s.length; j++) {
        //if current value of j is number digit
        if (numCache[s[j]]) {
          //concatenate to numString
          numString += s[j];
        } else {
          //concatenate value to outputString as many times as number value of numString
          outputString += s[j].repeat(+numString);
          break;
        }
      }
    }
  }
  return outputString;
};

//test cases
console.log(uncompress('2c3a1t'));
console.log(uncompress('4s2b'));
console.log(uncompress('2p1o5p'));
console.log(uncompress('3n12e2z'));
console.log(uncompress('127y'));

//compress function
const compress = (s) => {
  //declare let variable 'count'
  //assign to 1
  let count = 1;
  //declare let variable 'outputString'
  //assign to empty string
  let outputString = '';
  //iterate through characters of input string
  for (let i = 0; i < s.length; i++) {
    //if current value is different from previous value
    if (s[i] !== s[i - 1]) {
      //iterate through following characters in nested loop
      for (let j = i + 1; j < s.length; j++) {
        //if value of j pointer is same a i pointer increase value of count
        if (s[j] === s[i]) count++;
        //else break
        else break;
      }
      //if count has value of 1 concatenate current character to outputString
      if (count === 1) outputString += s[i];
      //else concatenate value of count and current character to outputString
      else {
        outputString += count + s[i];
        //reassing count to 1
        count = 1;
      }
    }
  }
  return outputString;
};

//test cases
console.log(compress('ccaaatsss'));
console.log(compress('ssssbbz'));
console.log(compress('ppoppppp'));
console.log(compress('nnneeeeeeeeeeeezz'));
console.log(
  compress(
    'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  )
);

//alternat compress function
const compress2 = (s) => {
  //define let variable 'output'
  //assign to empty string
  let output = '';
  //iterate through characters of input string
  for (let i = 0; i < s.length; i++) {
    //if current character is different from previous character
    if (s[i] !== s[i - 1]) {
      //iterate through each subsequent character in nested loop
      for (let j = i + 1; j < s.length + 1; j++) {
        //if j character is different from i character
        if (s[j] !== s[i]) {
          //if difference between j and i is 1 concatenate i character to output
          //else concatenate value of j - i and i character to output
          j - i === 1 ? (output += s[i]) : (output += j - i + s[i]);
          break;
        }
      }
    }
  }
  return output;
};

//test cases
console.log(compress2('ccaaatsss'));
console.log(compress2('ssssbbz'));
console.log(compress2('ppoppppp'));
console.log(compress2('nnneeeeeeeeeeeezz'));
console.log(
  compress2(
    'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  )
);

//anagrams function
const anagrams = (s1, s2) => {
  //edge case: if input strings have different length return false
  if (s1.length !== s2.length) return false;
  //declare cache1 and cache2 variables
  //assign both to empty objects
  const cache1 = {};
  const cache2 = {};
  //iterate through characters in both strings
  for (let i = 0; i < s1.length; i++) {
    //assign each character in s1 to key in cache1 with value equal to number of times it appears
    !cache1[s1[i]] ? (cache1[s1[i]] = 1) : cache1[s1[i]]++;
    //do same thing for characters from s2 to cache2
    !cache2[s2[i]] ? (cache2[s2[i]] = 1) : cache2[s2[i]]++;
  }
  //iterate through key/value pairs in cache1
  for (let key in cache1) {
    //if current key does not exist in cache2 or the key/value pairs do not match in cache1 and cache2 return false
    if (!cache2[key] || cache1[key] !== cache2[key]) return false;
  }
  return true;
};

//test cases
console.log(anagrams('restful', 'fluster'));
console.log(anagrams('cats', 'tocs'));
console.log(anagrams('monkeyswrite', 'newyorktimes'));
console.log(anagrams('paper', 'reapa'));
console.log(anagrams('elbow', 'below'));
console.log(anagrams('tax', 'taxi'));
console.log(anagrams('taxi', 'tax'));
console.log(anagrams('night', 'thing'));
console.log(anagrams('abbc', 'aabc'));
console.log(anagrams('po', 'popp'));
console.log(anagrams('pp', 'oo'));

//most frequent character function
const mostFrequentChar = (s) => {};
