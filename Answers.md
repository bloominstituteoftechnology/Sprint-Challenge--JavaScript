# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Difference between **forEach()** and **map()**:
## **map()**:
1. **map()** accumulates results into a collection 
2. **map()** transforms all elements of iterable/array
3. **map()** returns new array of same size with its newly transformed elements.
4. **map()** does not alter the original array
5. **map()** transforms one collection into another
6. **map()** works through two iterables; the input iterable and the output array.

## **forEach()**:
1. **forEach()** The only thing **forEach()** does is iterate over a collection and apply an operation to each element.
2. **forEach()** Does not return anything. 
3. **forEach()** does not care whether a value is returned or not.
4. **forEach()** works through a single collection at a time, unlike **map()**.


# Six different types in JavaScript:
1. **Object**--techically everything's an object. JS also uses a data structure called an object for OOP.
2. **Number**--Self explanatory.
3. **String**--A piece of information a person might read. Usually placed in between double or single quotes.
4. **Boolean**--My favorite. Can be either true or false. Like a light switch. Conditional syntax and base cases can only exist becuase of booleans.
5. **Null**--Null is an object--a variable has been declared but not yet assigned.
6. **Undefined**--is its own data type--null can be assigned to a variable to represent no value.


# Five Data Structures in JavaScript:
1. **Array**--A collection of elements with each element accessibly by index address. Mutable and iterable. 
2. **Singly-Linked List**--A group of nodes that form a sequence. Each node has data and a pointer to the next node in the sequence. Single Linked List users enjoy O(1) access when inserting or deleting items.
3. **Stack**--A collection of elements with two primary commands, push (adds element to top of stack), and pop (removes last item from top of stack). Most stacks also have a third command called peek, which allows us to check the last pushed item without popping it. Stack users also enjoy O(1) access when inserting/deleting items.
4. **Doubly-Linked List**--Like a Linked List, but each node also points to the preceding node as well as the next node. O(1) access for insertion/deletion.
5. **Tree**--A hierarchical data structure with a root node and children nodes. The children nodes can have children ad infinitum.

# What is Closure?
1. A **closure** is an inner function with access to the enclosing function's variables. 
2. A **closure** has access to three scopes:
..*Its own scope
..*The outer function's scope
..*The global scope
3. The inner function also has access to the outer function's parameters, with the only catch being that it doesn't have access to the **arguments** object. (an array of all passed-in arguments)
```javascript
function showName (firstName, lastName) {
​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
​function makeFullName () {        
​return nameIntro + firstName + " " + lastName;    
}
​
​return makeFullName ();
}

```