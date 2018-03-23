# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
<!-- 1. Describe some of the differences between `.forEach` & `.map`.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
3. What is closure? Can you code out a quick example of a closure?
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :) -->
# 1-a / **forEach** is an array method, iterate inside the array, and  it modifies the content of the array without changing the order of the values.
# 1-b/ **map** does the samething as forEach but map returns a new array for the modifieds content.

## 2/ javascript types are : strings, boolean, objects, arrays and numbers. *arrays*  containes a list of items(values) with respect to the order.

### ** closure is the  inside scope of a function. Nothing from the inside of the function will be handed outside unless the function is invoked and returns somthing. example : const bill =  function(){
###  return () => { return 'hello world'}
###  };
### bill();  ======the the content of the inner function can not be rached  unless we invoke the bill function and we invoke the inner function as well to get the 'hellow world'

####  1- *this* key word is a powerful way to refer  to the keys of an object if they were  used from a function nested inside that object as well, or connected to it thru the prototype. 2- also all the properties of the the constructors classes start with this. keyword.


####The four principles of "this"; 
####1. If this is not assigned to any object, it represents itself wihch is the object in the window ( the window binding).

####* 2. implicit binding : if there is an object and there is a method iside that object, if we  need to use a key or property 
####of that object INSIDE that function, we need to append "this." to that key, to let the function undestand the source
####of that key. this always refers to the father object


#####* 3. explicit binding : there is 3 methods we could use : .call  .apply  .bind   if we have a function has the this.
 ####conected to a key inside it, and we have another object has the same key and we want this. keyword  inside the function to 
 ####refer to that object, WE HAVE TO BIND THE FUNCTION AND THE OBJECT USING .call method. so we could use 
 ####functionName.call(objectName) >>>>>>in this case this. inside the function will refer to the object.
####>>>>>> let say we have an arry of values and we need to pass them to the binded function, we need the pass them as 
####parameters to that function, AND we need to mention them with this indexs inside the .call method along with the object
####name >>>> functionName.call(objectName, arr[0],arr[i])...we state every arr index  as needed . if the list of the indexs 
####is log we could use the spread syntax of the arry (..arr)
####.apply does the same thing as .call and we could use just the  arr name instead of the spread syntax.
####.bind does the same thing as .call but the only differnce is we need to assign the binded function/object/arr to a new 
####function and we have to invoke the new function to let .bind works example  newFunction = functionName.bind(objectName),..arr);
####newFunction();


####* 4. The last type of this. key word is if we have an object that we need to use as a model to create copies of it 
####we nedd to use assign this. keyword to every single key or property inside that object. Then we transfer that object 
####to a function formate and we start the name of that new function ( constructor) with UpperCase letter to be unique
####this. keyword in any copy refer not to the original constructor but to the copy that was created in by using the term "new"




