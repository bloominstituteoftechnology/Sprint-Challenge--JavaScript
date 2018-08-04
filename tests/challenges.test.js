/* eslint-disable */

const challengeMethods = require('../src/challenges');
/* eslint-disable no-undef */
describe('challenges', () => {
  describe('each', () => {
    it('should invoke cb on each array element', () => {
      let count = 0;
      challengeMethods.each([1, 2, 3], element => {
        count += element;
      });
      expect(count).toBe(6);
    });
    it('should pass the element and the index to cb', () => {
      let count = 0;
      challengeMethods.each([1, 2, 3], (element, index) => {
        count += element + index;
      });
      expect(count).toBe(9);
    });
    it('should call the callback passed to it for each element in array given', () => {
      const callBackMockFn = jest.fn(); // this function is going to act as your callback, if it's not called your test will fail.
      expect(callBackMockFn.mock.calls.length).toBe(0);
      challengeMethods.each([1, 2, 3, 'four'], callBackMockFn);
      expect(callBackMockFn.mock.calls.length).toBe(4);
    });
  });

  describe('map', () => {
    it('should return an array', () => {
      const arr = [];
      const result = challengeMethods.map(arr, n => n * n);
      expect(Array.isArray(result)).toBe(true);
    });
    it('should pass each item into the transform function', () => {
      const arr = [1, 2, 3];
      const mappedArr = challengeMethods.map(arr, n => n * 2);
      expect(mappedArr).toEqual([2, 4, 6]);
    });
    it('should call the callback passed to it for each element in array given', () => {
      const callBackMockFn = jest.fn(); // this function is going to act as your callback, if it's not called your test will fail.
      expect(callBackMockFn.mock.calls.length).toBe(0);
      challengeMethods.map([1, 2, 3, 'four'], callBackMockFn);
      expect(callBackMockFn.mock.calls.length).toBe(4);
    });
  });

  describe('limitFunctionCallCount', () => {
    it('should return a function', () => {
      expect(typeof challengeMethods.limitFunctionCallCount()).toBe('function');
    });
    it('should return a wrapped version of the original function that can only be invoked n times', () => {
      const foo = () => true;
      const limitedFunction = challengeMethods.limitFunctionCallCount(foo, 2);
      expect(limitedFunction()).toBe(true);
      limitedFunction();
      expect(limitedFunction()).toBe(null);
    });
    it('should properly handle arguments in the wrapped function', () => {
      const foo = (x, y, z) => x + y + z;
      const limitedFunction = challengeMethods.limitFunctionCallCount(foo, 2);
      expect(limitedFunction(5, 10, 15)).toBe(30);
      limitedFunction(0, 0, 0);
      expect(limitedFunction()).toBe(null);
    });
  });

  describe('cacheFunction', () => {
    it('should return a function', () => {
      expect(typeof challengeMethods.cacheFunction()).toBe('function');
    });
    it('The cached function should return the correct result', () => {
      const foo = x => x * x;
      const cachedFunction = challengeMethods.cacheFunction(foo);
      expect(cachedFunction(5)).toBe(25);
    });
    it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const foo = jest.fn();
      const cachedFunction = challengeMethods.cacheFunction(foo);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      expect(foo).toHaveBeenCalledTimes(2);
    });
  });

  describe('reverseString', () => {
    it('should return a string', () => {
      expect(typeof challengeMethods.reverseStr('hello')).toBe('string');
    });
    it('should reverse the given string', () => {
      expect(challengeMethods.reverseStr('hello world!')).toBe('!dlrow olleh');
    });
  });

  describe('checkMatchingLeaves', () => {
    it('should check if all leaves match', () => {
      const tree1 = {
        x: 1,
        y: 1,
        z: 1,
      };
      const tree2 = {
        x: 1,
        y: 1,
        z: 2,
      };
      expect(challengeMethods.checkMatchingLeaves(tree1)).toBe(true);
      expect(challengeMethods.checkMatchingLeaves(tree2)).toBe(false);
    });

    it('should check nested objects', () => {
      const tree1 = {
        x: 1,
        y: 1,
        z: 1,
        xa: {
          xx: 1,
          xy: 1,
          xz: 1,
          zz: {
            a: {
              b: {
                z: 1,
              },
            },
          },
        },
      };
      const tree2 = {
        x: 1,
        y: 1,
        z: 1,
        xa: {
          xx: 1,
          xy: 1,
          xz: 1,
          zz: {
            a: {
              b: {
                z: 2,
              },
            },
          },
        },
        r: 1,
      };
      expect(challengeMethods.checkMatchingLeaves(tree1)).toBe(true);
      expect(challengeMethods.checkMatchingLeaves(tree2)).toBe(false);
    });
  });

  describe('flatten', () => {
    it('should return an array', () => {
      const arr = [1, 2, 3, 4, 5];
      const results = challengeMethods.flatten(arr);
      expect(Array.isArray(results)).toBe(true);
    });
    it('should return a flattened array when given a nested array', () => {
      const arr = [1, 2, 3, 4, 5, [6], [7]];
      const results = challengeMethods.flatten(arr);
      expect(Array.isArray(results)).toBe(true);
      expect(results).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it('should return a flattened array regardless of how deep the array nesting is', () => {
      const arr = [1, [2], [[3]], [[[4]]]];
      const results = challengeMethods.flatten(arr);
      expect(results).toEqual([1, 2, 3, 4]);
    });
  });
});
