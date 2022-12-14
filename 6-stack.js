function addOne(num){
throw new Error('oh no, an error!')
}

function getNum(){
    return addOne(10)
}

function c() {
   console.log(getNum() + getNum())
}

c()

// eve dokaz so error kako javascript gi cuva funkciite vo callstack 
// Error: oh no, an error!
//     at addOne (/Users/bojanangjeleski/Documents/Harvard/lecture-1/6-stack.js:2:7)
//     at getNum (/Users/bojanangjeleski/Documents/Harvard/lecture-1/6-stack.js:6:12)
//     at c (/Users/bojanangjeleski/Documents/Harvard/lecture-1/6-stack.js:10:16)