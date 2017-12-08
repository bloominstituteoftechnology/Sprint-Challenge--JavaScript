# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. __Describe some of the differences between `.forEach` & `.map`.__

* Map puts all of the results into a collection, but forEach does not return anything.
* forEach iterates over a list and applies whatever code it holds to each member of the list it's iterating over. Map, on the other hand, does that as well, but then returns another list of the same size. The members of that list have had the code applied to them.
* Map is usually used to change the elements it's affecting while forEach is not usually used in this fashion. 
* An additional note: The separate place Map creates for the output allows for this to occur easily without worrying about const vs. let.

2. __Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?__

* _Five Types_: String ('a string'), Numbers (123), Booleans, (true/false), Arrays ([1, 2, 3]), and Objects ({firstName: Ira, lastName: Sanchez}).

* _Cool things about arrays_: Arrays allow you to pull an item from a list without knowing what is in the list in the first place. Objects can't do this, because they require you to reference a key. Arrays, however, use indeces that are indicated by a number (0 is the first place in the list). So, as long as you can manipulate a range of numbers, you can manipulate items in a list in an array.
3. __What is closure? Can you code out a quick example of a closure?__
* In order to understand closure, one first understand scope. 
* There are lots of boundaries in coding, and they are generally denoted by symbols that resemble little walls: {}, (), [].
* Some of the boundaries can be seen though, like () for example, and some can only be seen through from the inside to the outside, like {}. 
* When an item inside of the {} looks outside to get more information it needs, this is when _closure_ occurs.
* Here's an example in javascript:
    ```
    function makeFunc() {
    const name = 'Ira Sanchez';
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();
    ```
4. __Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)__

    1. If a function that has _this_ inside of it is in the global scope, then _this_ will refer to its window object. The function is a method in the window (global scope), so _this_ refers to the window function is in. For example, if I say "I like this place," _this_ refers to the place I am currently in.
    2. If a function is called and it has a dot before it (.function), then the word to the left of the dot is what _this_ is referring to (thisRefersToMe.function).
    3. Whenever you use a constructor function (a function that makes an object), _this_ refers to the new object that is created and returned by the constructor function. 
    4. Call and Apply methods explictly define _this_. This means that whatever appears in the () after _call_ or _apply_ contains what _this_ is referring to.
