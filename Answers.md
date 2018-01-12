# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

# 2. const newArray = [];

  for (let i = 0; i < elements.length; i++) {
    newArray.push(cb(elements[i], i));
  }
  return newArray;


# 3.   let counter = 0;
  return function countUp(...args) {
    counter += 1;
    if (counter <= n) {
      return cb(...args);
    }
    return null;
  };

# 4. const cache = {};

  return input => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };

# 5. if (str === '') {
    return;
  }
  return reverseStr(str.substr(1)) + str.charAt(0);

# 6. Don't know.


# 7. return elements.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);