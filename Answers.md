## Differences between `.forEach` & `.map`

`.forEach` - Executes an action across all elements in an array/string. `.map` -
Gathers all of the elements into a collection to create a new array/string and
then perform the given operation on the new array/string.

## 5 _JavaScript_ Data Types

* _Boolean._
* _Null._
* _Undefined._
* _Number._
* _String._

## Arrays - _What is so special?_

* _Arrays_ can store different data types. This allows one to copy/clone,
  insert/delete, or search/sort various objects/data.

## Closure - _What is it?_

Closure is an inner function that has access to the outer functions within the scope chain. 
_Example_
```javascript
function subtract(a) {
  return function(b) {
    return a - b;
  };
}

let subtract2 = subtract(2);
let subtract4 = subtract(4);

console.log(subtract2(10));
console.log(subtract4(10));
```

## These 4 rules for `this`

* Global/Window Context - **Scope**
* Implicit - Called by a preceeding **`.`** function
* New - `new` constructor function
* Explicit - **`.bind`** **`.call`** **`.apply`**
