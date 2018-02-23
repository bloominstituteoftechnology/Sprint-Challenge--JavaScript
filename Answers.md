# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Some of the differences between forEach and map include the fact while the forEach does not return anything while returns values and a new array. Which means forEach alters the inital array while map leaves it alone performs the function and creates the new array.
2. Five different types in javascript are:
boolean,
null,
number,
string,
symbol.
Arrays are special since they store multiple values in a single variable.
3. Closure is a function inside another function which has the ability to utilize the variables of the outter function. 
function school (major,year) {
    let intro = "I'm ";
    function introduction() {
        return intro + major + " " + year;
    }
    return introduction();
}
4. a. Whenever a fumction is containted globally the value will be withing hte function as the window object.
    b.When a function is called with a preceding dot, the object before the dot is this.
    c. When constructors are used this is refered to when the constructor was created and will be returned by the constructor. 
    d. When call or apply are utilized this is explicitly defined. 