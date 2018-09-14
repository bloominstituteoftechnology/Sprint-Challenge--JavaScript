## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.

.forEach loops through every element in an array. It is best used to invoke functions on every element (or console.log all elements for debugging purposes). 

It does not automatically create a new array. However, it is possible to manipulate .forEach to act as map by creating a new array before using .forEach and using .push within the .forEach:

  let arr = ['kat', 'gem'];


  let newForEachArr = [];
  arr.forEach(el => newForEachArr.push(`${el}@gamil.com`));

  console.log(newForEachArr);   //  [ 'kat@gamil.com', 'gem@gamil.com' ]

.map always creates a new array. Using .map to achieve the same result as above is much simpler.

  let newMapArr = arr.map(el => `${el}@gamil.com`);

  console.log(newMapArr);       //  [ 'kat@gamil.com', 'gem@gamil.com' ]

2. What is the difference between a function and a method?

A method is a function. But not every function is a method. 

A method is a function that is inside an object.

3. What is closure?

Closure is a way to capture information to be used later outside of its scope.

4. Describe the four rules of the 'this' keyword.

4 ways to determine what 'this' is pointing to (aka What is the calling object?) in order of precedence:

  1)  new binding: when new is used with prototypes a new object instance is created. 'this' within the newly created instance will provide its own properties (instead siblings, parents, etc.)

  2)  .call(), .apply(), .bind() explicitly bind this to the first parameter within the ().

      .call(objToBind, paramOneOfObjToBind, paramTwoOfObjToBind, etc.)
      .apply(objToBind, [arrayOfAllTheParamsForObjToBind])
      .bind(objToBind)        => This does not invoke the method. It must be later executed.

  3)  implicit binding: is when a method is called. Here the object is to the left of the method. Example: obj.myFunkyFunc();

  4) global / window binding. When this has not been bound by the 3 other ways above, it is bound to the global or window binding (which generally should be avoided.)


5. Why do we need super() in an extended class?

  When creating prototypes using classes, super() acts as the .call including this when creating prototypes without using classes. In other words, super binds child to parent so child has access to the parent's properties (but not vice versa).


