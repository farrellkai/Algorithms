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
const mostFrequentChar = (s) => {
  //declare variable 'cache' assign to empty object
  const cache = {};
  //declare let variable 'output' assign to first character in input string
  let output = s[0];
  //iterate through characters in input string
  for (let i = 0; i < s.length; i++) {
    //if current character is not a key in cache create it w/ value of 1, otherwise increment
    !cache[s[i]] ? (cache[s[i]] = 1) : cache[s[i]]++;
  }
  //iterate through characters in input string again
  for (let i = 0; i < s.length; i++) {
    //if key value of current character in cache is greater than key value of output in cache reassign output to current character
    if (cache[s[i]] > cache[output]) output = s[i];
  }
  return output;
};

//test cases
console.log(mostFrequentChar('bookeeper'));
console.log(mostFrequentChar('david'));
console.log(mostFrequentChar('abby'));
console.log(mostFrequentChar('mississippi'));
console.log(mostFrequentChar('potato'));
console.log(mostFrequentChar('eleventennine'));
console.log(mostFrequentChar('riverbed'));

//pairSum function
const pairSum = (nums, targetSum) => {
  //declare cache variable assigned to empty object
  const cache = {};
  //declare output variable assigned to empty array
  const output = [];
  //iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    //if difference between targetSum and current element in nums exists in cache...
    if (targetSum - nums[i] in cache) {
      //push value of that key minus 1 onto output array
      output.push(cache[targetSum - nums[i]]);
      //push value of i onto output array
      output.push(i);
    }
    //create current element as key in cache with value equal to i + 1
    cache[nums[i]] = i;
  }
  return output;
};

//test cases
console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
console.log(pairSum([4, 7, 9, 2, 5, 1], 3));
console.log(pairSum([1, 6, 7, 2], 13));
console.log(pairSum([9, 9], 18));
console.log(pairSum([6, 4, 2, 8], 12));

//intersection function
const intersection = (a, b) => {
  //declare cache assigned to empty object
  const cache = {};
  //declare output assigned to empty array
  const output = [];
  //iterate through a
  for (let el of a) {
    //assign key/value pairs to cache for each element with true value
    cache[el] = true;
  }
  console.log(cache);
  //iterate through b
  for (let el of b) {
    //if current element exists in cache push to output
    if (cache[el]) output.push(el);
  }
  return output;
};

//test cases
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
console.log(intersection([2, 4, 6], [4, 2]));
console.log(intersection([4, 2, 1], [1, 2, 4, 6]));
console.log(intersection([0, 1, 2], [10, 11]));

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}

//console.log(intersection(a, b));

//fiveSort function
const fiveSort = (arr) => {
  //declare let variable 'i' assign to 0
  let i = 0;
  //declare let variable 'j' assign to last index of input array
  let j = arr.length - 1;
  //iterate through array backwards and forwards until both pointers meet
  while (i < j) {
    //if j pointer element is 5 decrement value of j and skip to next iteration
    if (arr[j] === 5) {
      j--;
      continue;
    }
    //if i pointer value is 5...
    if (arr[i] === 5) {
      //reassign current element to value of j pointer
      arr[i] = arr[j];
      //reassign value of j pointer element to 5
      arr[j] = 5;
      //decrement value of j
      j--;
    }
    //increment value of i
    i++;
  }
  return arr;
};

//test cases
console.log(fiveSort([12, 5, 1, 5, 12, 7]));
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
console.log(fiveSort([5, 5, 5, 1, 1, 1, 4]));
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
//console.log(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]));

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];

console.log(fiveSort(nums));

//Node generator
function Node(val) {
  this.val = val;
  this.next = null;
}

//linked list values function
const llValues = (head) => {
  //declare output variable assign to empty arry
  const output = [];
  //declare let variable 'node' assign to head
  let node = head;
  //iterate through each node in list
  while (node !== null) {
    //push value of node to output
    output.push(node.val);
    //reassign node to next node in list
    node = node.next;
  }
  return output;
};

//test cases
const a1 = new Node('a');
const b1 = new Node('b');
const c = new Node('c');
const d = new Node('d');

a1.next = b1;
b1.next = c;
c.next = d;

console.log(llValues(a1));

const x = new Node('x');
const y = new Node('y');

x.next = y;

console.log(llValues(x));

const q = new Node('q');

console.log(llValues(q));
console.log(llValues(null));

//alternative linked list values function
const llValues2 = (head, output = []) => {};
