# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

##H2 Describe some of the differences between .forEach & .map.
forEach - take in an array, peforms some action on it, transforms that data in place.

map does the same except returns a new array with the transformed elements.

##H2 Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
1. string - anything surrounded by quotes "words" "453"
2. Numbers - integers, floats.
3. objects - key value pairing the can be used to reference related data;
object = {
    name: 'troy',
    age: '27',
}
values can be accesed with dot or bracket notation.
object.name => 'troy';
object['name'] => 'troy';
4. undefined;
5. null;
6. Arrays - they are special because they are Ryan's favorite. Stores any number of elements in a group surrounded by [];
Actually special because they can be iterated through the find or manipulate data. has a bunch of built in methods. forEach. Map length pop push.


##H2What is closure? Can you code out a quick example of a closure?

Closure is a local variable created through a function and scope.
```

let global = 'hi';

const hello = () => {
    const local = 'bye'


    //console.log(global) => 'hi';
    //console.log(local) => 'bye';
}

//console.log(global) => 'hi';
//console.log(local) => undefined
```
the variable local only exsits inside the hello function and cannot be accessed outside of it so when it is tryig to be logged outside of the hello function, it can't not be found.

the global variable is able to be logged inside of hello because functions inhierate the closure and values from anything above it.



##H2 Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. window/ global onclick= console.log(this). log the entire window object;
2  what ever is to the left to of the method when calling a object. ==>object.method(this)
3 when using JS native methods .bind .call. .apply
4. When used with a cronstructor, this will refer to this specific instance created. not the constructor.








