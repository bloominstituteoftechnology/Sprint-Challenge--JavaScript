# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.

Both iterate over a list. 
'.forEach' does something to everything in the list it acts on and changes the list. Bottom line: it alters the original.
'.map' duplicates the list it acts on. It leaves the original intact and makes changes to the cloned list. Bottom line: the original list still exists unaltered and changes are made to a new list.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

String - Represents characters such as letter, numbers and symbols. The content is held within single- or double-quotes.

Number - A mathematical number.

Boolean - Answers whether a statement is true or false.

Object - Contains multiple datatypes with corresponding values. Objects are flanked by curly braces. While many different types can be in an object, it is best practice to bunch types together. For instance, have three Numbers; not a stirng, a number and a boolean. Objects hold information in key-value pairs. The key is essentially labeling what sort of information is about to be logged, and the value is the actual information. For instance, firstName would be a key and the value would be 'Anthony'.

Null - Describes the absence of value. It is explicitely created (const a = null;)

Undefined - This type occurs when a variable is declared but not assigned to a value. Undefined can be achieved explicitely (const a = undefined) or by closing the variable without an assignment (const a;). 

Regarding Arrays, an Array is a type of Object. Arrays hold multiple values of any type. Arrays are set between brackets and separated by commas. Rather than being held in key-value pairs like Objects, Arrays are indexed. The index number is essentially the key (but is not shown. It is just understood to be there), and the value is what is within the Array.

3. What is closure? Can you code out a quick example of a closure?

Closure is when an inner function can reach out to an outer function and use the outer function's variables. As such, the closure has access to three different scopes: its own, the outer function, and the global scope.

function introduction(firstName, lastName) {                                        // outer function
    const myNameIs = 'My name is'
    function introductionStr() {                                               // inner function
        return `${myNameIs} ${firstName} ${lastName}. Pleased to meet you.`         // accesses the arguments of the outer function. This is closure.
    }
    return introductionStr;
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    - When a function is in the global scope, the value of 'this' within that function is the window object
    - When a function is called by a preceding dot. the object before the dot is 'this'.
    - If a constructor function is used, 'this' is the object created and returned by the constructor.
    - if '.call' or '.apply' is used, 'this' must be explicitely defined 


