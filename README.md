# Assessing your JavaScript Fundamentals Fu
* The objective of this challenge is to get you used to answering a few questions about JavaScript that are commonly asked in interviews. 
* We also have some more reps for you to help hammer in the knowledge you've thus far learned.
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.

The difference between forEach and map is that map mutates the original Array while forEach creates a new Array and leaves the original Array un-mutated.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Different Types:
- String
- Number
- Boolean
- Object
- Function

An Array is special because it is actually an Object under-the-hood.

3. What is closure? Can you code out a quick example of a closure?

Closure is when a function sees outside its scope (for things such as variables).

An example is:

const foo = 'bar'
const newFunction = () => {
    console.log(foo);
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

- can point to the global variable / Object
- can point to within a function invokation call between the '()' (implicit binding)
- can point to when a 'new' constructor is created (e.g. new Object)
- whenever an explicit binding is used: .call; .apply; .bind;

## Initializing Project - We have set up a testing environment for you using `Jest`
* Fork/Clone this project into a directory on your machine.
* `cd` into your forked local copy.
* notice there is a `package.json` file included. remember that a `package.json` file is like a map of instructions for when you run `npm install`
* run `npm install` to download all the dependancies you need for this project.
* run `npm run watch` to start your tests in **watch mode**. This command will listen for changes as you work through the problems and save your `challenges.js` file. As soon as you hit save after writing some changes, the linter will run, and the tests will run as well. 
* As soon as you have a test passing, `commit` your changes to your fork so we can see an active commit stream.
* Once you're done with all the tests, push your commits to your fork and submit a Pull-Request

### Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!

## Once you are finished - We have further reading for you and your weekend video/study materials.
* Watch this first - [Data Structures I - Lecture](https://www.youtube.com/watch?v=hCOJeCA8-MI) 
* [Slides from the video](https://docs.google.com/presentation/d/1I-e6qaaoqf9w7Q-8jM7REJ9AjmGLvnxeGyXFl5HXm98/edit)
* Study up on these topics before Monday - [Data Structures I - Study Guide](https://github.com/LambdaSchool/Data-Structures-I-Mini-Sprint)
* Come prepared on Monday to discuss data structures. These weekend study guides and materials will help you become much stronger when the window of discussion opens up on these topics!
