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
    it('should call the callback passed to it for each element in array given', (params) => {
    
      const callBackMockFn = jest.fn(params); // this function is going to act as your callback, if it's not called your test will fail.
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
});
