
function recurse() {
    console.log('recursion!')
    return recurse()
}
recurse()

//RangeError: Maximum call stack size exceeded 
// run out of stack size