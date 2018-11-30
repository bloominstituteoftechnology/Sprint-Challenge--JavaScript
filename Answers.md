
# Answers for JS Fundamentals Sprint Challenge

## Describe the biggest difference between .forEach & .map.
1. .forEach does not return anything -> It only loops through all the elements within an array, .map can return three different values based on the default parameters of the callback function -> currentValue, index, array, thisArg. 
## What is the difference between a function and a method?
2. A function is a block of code that can be invoked by it's name. So you could say `function fruit(){}` and call it later by invoking it `fruit()` and all the code within that function will be exectued. A method is a block of code that is associated within an object. This allows us to manipulate data contained within the class it is defined within.
    * A method lives inside of an object.
    * a function lives on it's own.

## What is closure?
3. A closure is contained within the scope category which determines where variables can be accessed from. A defined function will 
remember the environment in which it was created. I believe the easiest way to explain this concept(since closures are not neccesarily written in code) is in code. See my example below
```
function fruit(){
    const apple = 'apple';

    function checkIfApple(){
        if(apple = 'apple'){ // => apple is able to be referenced inside of checkIfApple due to the scope of apple defined above.
            console.log(apple);
        }
    }
}
console.log(apple); // => This is an error because apple is 'Closed'(only defined within fruit) to the fruit function. 
```
## Describe the four rules of the 'this' keyword. 
* 1. **Window Binding:** Would make this equal to the window. I really liked Josh's example of the forest -> `this` equals the entire forest. *Bad behavior
* 2. **Impliciit Binding:** To know what `this` means in this context, you look to the left of the dot notation where you are invoking a function. 
 * 3. **New Binding:** JavaScript will create a brand new object for us and save it as this. So when you reference something like an Animal into a variable zebra
        `this` would mean zebra.{Your reference} in this situation.
* 4. **Explicit Binding:** You tell what the `this` statement exactly references. You can do this on a function by calling Animal.call(zebra) and `this` would be 
        the same as stating zebra.{your-reference} in this context.

## Why do we need super() in an extended class?
5. Using super() to extend a class by giving the extended class access to the parents constructors. Using function constructors you have to use Object.create(this, Class) in order to inherit the constructors of the parent.
---