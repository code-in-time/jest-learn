const anagram = (str1, str2) => { 

  function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
  }

  // Helper function
  function formatStr(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }

  return isAnagram(str1, str2);

};

module.exports = anagram;