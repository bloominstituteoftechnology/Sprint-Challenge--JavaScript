/* eslint-disable*/
/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
	  for (let i = 0; i < elements.length; i++) { // //this each function takes a for loop and interates
				cb(elements[i], i);           // though the elements of the elements array and passes its values to cb one by one.
                                     //  cb needs to be invoked multiple times once for each value in the array
                                    //   therefore elements needed an iterator. 
	}
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newarray = [];                            
	 for (let i = 0; i < elements.length; i++) {  // this map function takes a for a loop and interates over the 
			newarray.push(cb(elements[i]));          //  each values in the array and passes each of the values in 
			                                         // (elements), map passes each of the values in arr that the for  
			                                        //   loop iterates and passes all of the values to cb to be invoked map 
	}                                          //    keeps track of the results invoked by cb and creates a new array 
	                                          //    (const newarray) containing the values returned of the invocation
	  return newarray;                       //     of cb that is the same length as the original array and assigns them
};                                         //     const newarray where they are returned. 

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
    let count = 0;                  // variable count to keep track of how many times cb was invoked. 
    const limitCall = () => {      //  const limitCall invokes cb and uses the counter to keep track   
		  cb ();                      //   of how many times cb has been called since the instructions say 
			count++;                   //   that cb can only be invoked n times. 
  }
};
   return limitCall;           // the variable limitCall returns the results of the invoking cb 'n' times    
};

const cacheFunction = cb => {
	 const Cache = {};
	 return (input) {
		 if (Cache.hasOwnProperty(input)) {
			 return Cache[input];
		}
		 else {
			 return Cache[input] = cb (input);
		}
	};
}
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
     if (str === " ") {    
			 return " ";
			}
		  else return(str.substr(1)) + str.charAt(0); 
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
	const matchingLeaves = [];

   function checkmatches(leaves) {
    if (!!leaves.children) {
        for (var child in leaves.children) {
            checkmatches(leaves.children[child]);
        }
    } else {
        matchingLeaves[matchingLeaves.length] = leaves.id;
    }
    return matchingLeaves;
}
};

const flatten = elements => {
  let flattenarray = [];
	for (let i = 0; i < elements.length, i++) {
			if(Array.isArray(elements[i])) {
			flattenarray = flattenarray.concat(flatten(elements[i]));
		}
		 else {
		 flattenarray.push(elements[i]);
     }
	}
	   return flattenarray;
	// Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
