// function printOne() {
//     console.log('one')
// }
// function printTwo() {
//     console.log('two')
// }
// function printThree() {
//     console.log('tree')
// }

// printOne()
// printTwo()
// printThree()
// no shto ako stavime setTimeout, koja e built in async funkcija vo javascript
// example
function printOne() {
    console.log('one')
}
function printTwo() {
    console.log('two')
}
function printThree() {
    console.log('tree')
}
// po koj redosled ke se ispecatat ovie tri funkcii?
setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()
// output
// 3, 2, 1 
// iako printTwo e 0 sekundi prvicno ni go pecati three.

