# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
Differences between forEach and map.
forEach is used to iterate over an object and return back the data to the user.
map goes through an array and returns back a new array.

five types of data representation.
boolean represents true or false.
integers-whole numbers
string it is a text or number enclosed in a quotation marks.
arrays is a container that stores more than one values using round brackets.are special because of 0 based indexing ability.
object is a container that stores multiple value and it is enclosed with curly braces.

closure are functions that refer to variables that are defined outside it.
example:
function func(){
    const greeting= function (){
        console.log('good morning!');
    }
    const hi='hey';
    return greeting;
}
const closureFunction =func();
closurefunction();

This keyword rules.
window/global binding-
implicit binding
new binding
explicit binding
