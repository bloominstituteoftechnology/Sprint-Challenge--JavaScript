1. The biggest difference between the .forEach and .map methods is that .map returns an array. Both methods will filter over an array, apply a change or action, but .forEach alters the content of an array where as .map generates a new one.

2. Functions and methods are very similar because a method is a function stored in an object. So their biggest differences stems from where they are stored in our javascript structure.

3. Every time a function is created so is closure. This closure creates an environment where explicit rules are introduced regarding a functions ability to access the global and functional scope. These rules dictate whether or not a specific funciton will have access to certain variables. This all dependence on corresponding inheritence and general document structure. 

4. The four rules of the this keyword are really principles revloving around how they get binded. Those four bindings are Window, Implicit, Explicit and New.
    1.Window Binding: This is the default binding for the this keyword. When we log onto a page and introduce nothing we are exsiting in our global scope. Therfore, this becomes represented by our current status in the global scope, also know as the Window.
    2.Implicit Binding: Also thought of as automatic comes into play when we begin to introduce objects and methods. When we call our methods, the preceding objects before our dot become the this keyword. So when we implement this in our objects, it will refer to the object itself. An example would be: 
    const me = {
        name: "matt",
        howdy: function(){
            console.log(`Howdy, I'm ${this.name}`);
        }
    }
    me.howdy() // Return - "Howdy, I'm Matt".

    3.Explicit Binding: Unlike implicit, explicit is not automatic and we need to use the call, apply or bind method to explicitly define our this keyword. This can allow us to be flexible in reusing and reassigning objects and methods but can get confusing so be wary!
    4.New Binding: Lastly the new binding is used in relationship to a constructor function. Essentially when we use a constructor, the new binding ensures that our new object will inherit the this structure defined in our constructor. 

5. The super() allows us to inherit methods via the __proto__ chain. And provides us access to the this keyword. By adding super it replaces our .create() and .call() and inherits everything from our constructors without the two additional lines of code. Also keeps our methods a bit more concise within our object structure. 