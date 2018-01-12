# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. forEach loops through the array, but does not create a new
# array in the process while map does create a new array and pushes
# the result of that loop to the array


# 2. Boolean, Undefined, Number, Null, String arrays are also objects.

# 3. A closure is a way in which you can give functions memories, an example 
# of this would be a counter, notice how running the code below keeps track of the counter;
function counter () {
    let count = 0
    return function countUp () {
        count++
        return count
    }
}

const logger = counter()

# 4. 'this' has 4 rules.
# - When 'this' is in a function in the global scope
#   it points to the window objects
# - Whatever is to the left of the dot
# - In a constructor this refers to the object that was created by the constructor function
# - If you use call, apply, or bind you change the way this is defined