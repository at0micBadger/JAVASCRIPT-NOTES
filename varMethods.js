var myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Initial stack:', myStack);

// Push more items
myStack.push(4);
myStack.push(5);
console.log('After pushing 4 and 5:', myStack);

// Pop items off the stack
var popped1 = myStack.pop();
console.log('Popped:', popped1);
console.log('Stack after first pop:', myStack);

var popped2 = myStack.pop();
console.log('Popped:', popped2);
console.log('Stack after second pop:', myStack);

// Push a new item
myStack.push(100);
console.log('After pushing 100:', myStack);

// Pop everything
var popped3 = myStack.pop();
var popped4 = myStack.pop();
var popped5 = myStack.pop();
console.log('Popped items:', popped3, popped4, popped5);
console.log('Final stack:', myStack);

// ===== FUNCTION VERSIONS =====

var myStackFunc = [];

function pushToStack(stack, value) {
    stack.push(value);
    return stack;
}

function popFromStack(stack) {
    var popped = stack.pop();
    return popped;
}

pushToStack(myStackFunc, 1);
pushToStack(myStackFunc, 2);
pushToStack(myStackFunc, 3);
console.log('Initial stack (function):', myStackFunc);

// Push more items using function
pushToStack(myStackFunc, 4);
pushToStack(myStackFunc, 5);
console.log('After pushing 4 and 5 (function):', myStackFunc);

// Pop items using function
var poppedFunc1 = popFromStack(myStackFunc);
console.log('Popped (function):', poppedFunc1);
console.log('Stack after first pop (function):', myStackFunc);

var poppedFunc2 = popFromStack(myStackFunc);
console.log('Popped (function):', poppedFunc2);
console.log('Stack after second pop (function):', myStackFunc);

// Push a new item using function
pushToStack(myStackFunc, 100);
console.log('After pushing 100 (function):', myStackFunc);

// Pop everything using function
var poppedFunc3 = popFromStack(myStackFunc);
var poppedFunc4 = popFromStack(myStackFunc);
var poppedFunc5 = popFromStack(myStackFunc);
console.log('Popped items (function):', poppedFunc3, poppedFunc4, poppedFunc5);
console.log('Final stack (function):', myStackFunc);
