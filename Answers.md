# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### 1. Describe some of the differences between `.forEach` & `.map`.

Map is expected to return an array after it performs the transformation on the elements, while forEach doesn't return anything. The forEach method is like a subset of map, a more specific version of it that works on one collection of elements. As far as I can see, the main reason to use forEach is for efficiency in the case that you don't actually want to transform the array. (it would be an unnecessary computation)

#### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

1. Integer
2. Float
3. String
4. Array
5. Object

The special thing about arrays is that they can hold all of the other data types, even other arrays, whereas most data types are very strict about what they can hold.

#### 3. What is closure? Can you code out a quick example of a closure?

A closure is when you access data outside of the local scope of an anonymous function that itself is inside a function. What's happening is that the 'context'/'environment'/'scope' that the anonymous function lives inside is being referenced, and it can do this because the anonymous function exists within the same function call. My understanding is that Javascript doesn't have real lexical scoping, which is why you have to be careful about declaring global variables using var and watch for 'hoisting', or use const/let to be more clear about your intentions.

#### Example code for a closure

```
function sayHello(name) {
    const message = `${name} says hello!`;
    const greet = () => {
      console.log(message);
    }
    greet();
  }
```
sayHello('Rob') would then print "Rob says hello!", accessing the message variable even though it is not defined within the greet function.

#### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

The four rules of the this keyword basically refer to how you control the context of 'this'.

#### Window/Global Object binding

The first principle is the Window/Global Object binding, which is a reference to the global environment.

#### Implicit binding

The second is called the Implicit binding, which is where you place this before a function and precede the function with a dot. (which then binds it implicitly to the property of the object being passed into the function)

#### New binding

The third is called the New binding, which is specific to when this is used with a constructor function to create and return an object.

#### Explicit binding

The fourth and final principle of this is the Explicit binding, which is where you use the call/apply/bind methods to explicitly reference a particular object (which you pass into the method parameter).
