# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1) .forEach will iterate and execute a given function once for each array element while .map will create a new array instead with the results of a given function for every array element at once.

2) Boolean, Null, Undefined, Number, and String\

3) A closure is a function inside another function that can use the variables of the puter functions. For example, function sayHi (name) {
    var intro = 'Hi there, ';

    function sayName () {
        return intro + name;
    }

    return sayName();
}
sayHi ('Mack');

4) in a window binding, the value here will be the same as the Object of the window. In an inplicit binding, it takes in an object as the argument and depending on which object it is, there is a different meaning of this everytime it's logged out.A new binding is used with constructor functions and speaks about the object that is crreated abd returned in that function. In an explicit binding, it is explicitly called with the .call or .apply methods.