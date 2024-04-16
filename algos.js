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
      for (let j = i + 1; j < s.length; j++) {}
    }
  }
};
