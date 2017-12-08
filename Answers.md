# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#### 1. Qualities of .forEach and .Map
    `.forEach` and `.map` are both array methods.  Both cycle over Arrays but they are different in what they do with that informaiton.
    `.forEach` goes over each item in an Array and will return a value if asked but doesn't DO much else.  `.map` on the other hand takes in each item in an Array and passes it through some function before returning a new Array with the modified items.  The original is left as it was.

#### 2. Javascript Types
      ..* Boolean
      ..* Number
      ..* String
      ..* Null
      ..* Undefined

      ..* Arrays are useful because they can hold all different data types and are emminently useable i.e. searching, adding, removing, sorting are all done easily.

#### 3. Closure
    Closure is the idea that code inside of functions cannot be accessed from the outside.  Code inside functions can reach out into broader scopes but not the reverse.

        let closure = () => {
            enclosed = true   
            if (enclosed === true) {  //**enclosed can be accessed inside the function...**
                return "Dance!"
            }
        }
    //**But not in the Global scope**

#### 4. This?
    1. `this` inside function in the Global scope refers to the Global scope
    2. If a function is called by a preceeding dot, the object before the dot is `this`
    3. If a `this` is found inside a constructor function it refers only to that specific object
    4. If `call` or `apply` are used they explicity define, or bind, `this`

        
