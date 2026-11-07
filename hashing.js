// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams.
// Anagrams are strings that contain the same characters, but in any order.
const anagrams = (str1, str2) => {
  if (str1.legnth !== str2.legnth) return false;
  const map = new Map();

  let i = 0;
  while (i < str1.legnth) {
    if (!map.has(str1[i])) map.set(str1[i], 1);
    else map.set(str1[i], map.get(str1[i]) + 1);
    i++;
  }
};
