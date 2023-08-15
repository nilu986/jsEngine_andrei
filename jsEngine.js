/* 1.  Parser --> AST --> Interpreter --> Profiler(Analyses the data if it needs to optimise then send it to Compiler otherwise Interpreter will generate byte code) --> Compiler --> Optimized code 
                          |
                          Bytecode

    2. Interpreter vs.  Compiler
      Interpreter -- reads one line by one line in file on the fly and change it to bytecode which are quick and starts but it make it slower 
      Compiler -- compiles once and   changes human readable code to machinecode
                  Babel --> is a Js compiler that takes our modern JS code and returns browser compatible JS(older JS Code)                       
                  TypeScript --> is a superset of Javascript that compiles down to Javascript.
                  
                  Both of these do exactly what compilers do: Take one language and convert into a different one!

    3. Browser uses JIT Compiler which includes Interpreter as well as Compiler

    4. Is JS an interpreted language? --> Yes initially, but not tecnically because it dependes on implimentation.

    5. these are things by which javascript code is very less optimized --> eval(), arguments, for in, with, delete, hidden classes Inline caching

    6. Call Stack and Memory Heap -> main javascript engine work to allocate memory and where we are in code execution
        call stack --> it's a region in memory which operates in LAST in FIRST OUT is used to track code execution 
        memory heap --> it's free store, large space in unordered fasion which JS engine provides us

    7. Stack overflow--> when we call a function into same function then execution will always going on and will be a case of 'Maximum call stack size exceeded'\

    8. Garbage Collection --> JS is a garbage collected language-> JS engine automatically clean memory heap if any data not required further. Like c language where we need to mangae garbage collection and due to which it's very fast if we manage it, in JS Garbage collector is responsible for memory management which creates fumble sometimes due to which JS is slow as compare to C becuase of memory leak which is not handled by Garbage collector.
    
    9. Memory leak --> we have not enough memory for wastage to store not required data, basically it happened when some memory not handled by Garbage collector like below
      9.1 --> Global Variabal --> var a, b,c = 1; these variable are cleaned up by collector becuase it needs to be available globally so we can use it multiple time or later but it's memory leak
      9.2 --> Event Listener --> var element = document.getElementById('x'); element.addEventListener('click', onCLick); --> this event never be cleared out by garbage collector automatically
      9.3 --> SetInterval()--> we need to clear interval if we set it otherwise it will never be clear by GC.

    10. JS is single threaded and synchronous which holds other actions to executes.

    11. Javascript Runtime-->  Every JS engine provides a runtime which includes --> Call Stack + Memory Heap + EVENT LOOP + Callback Queue +  WEB API to make it ASYNCHRONOUS like DOM (for events like click on DOM), FETCH()(for HTTP releted activities), SETTIMEOUT()(to hold sometimes or cache something)


                          
*/

exports.jsEngine = function (code) {
  return code.split(/\s+/);
};

//Hidden Classes Example
function Animal(x, y) {
  this.x = x;
  this.y = y;
}
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);
//Now compiler knows about Animal class and properties but later we starts adding property which is not in knowledge of compiler that is hidden at compiler end like below properties are added later
obj1.a = 30;
obj2.a = 100;
obj2.b = 50;
obj1.b = 49;
console.log(obj1);

// Call Stack Example
// Anonymus is used for GLOBAL EXECUTION CONTEXT
function substrack(num) {
  return num - 2; // Executed first
}

function calculate(x, y) {
  const sum = x + y;
  return substrack(sum); // Executed last
}

console.log(calculate(9, 5));

// JS Runtime Example

console.log(1); // call stack executes 1
setTimeout(() => console.log(2), 0); // it sends to web API which send it to call back queue
setTimeout(() => console.log(5), 0); // it sends to web API which send it to call back queue
setTimeout(() => console.log(7), 0); // it sends to web API which send it to call back queue
console.log(3); // executed at second position  now stack is cleared after this execution, event loop is always checking call stack and if it is empty then event loop checks callback queue if something is present there then event loop will push it to call stack.

// Stack Overflow Example// Recursive Function
const list = new Array(6000).join('1.1').split('.');
console.log(list);
function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    console.log(item);
    removeItemsFromList();
  }
}
removeItemsFromList();
