function consume (x, y , callback) {
  
    callback(x, y);
  }
  const greeting = function(x,y) {
    console.log(`Hello ${x} ${y}, nice to meet you!`)
};
greeting(function(greeting) {
    console.log(greeting)
});
consume('Mary','Poppins', greeting);
