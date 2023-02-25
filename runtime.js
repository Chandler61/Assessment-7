const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results: 
//This code snippit took 2.228 ms

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();
//This code snippit took 875.6955ms

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//NOTES
//extraLargeArray times: Append = 2.228ms while Insert = 875.6955ms
//largeArray times: Append = 418 μs while Insert = 7.5601 ms
//mediumArray times: Append = 107.9 μs while Insert = 158 μs
//smallArray times: Append = 84.5 μs while Insert = 44 μs
//tinyArray times: Append = 73.5 μs while Insert = 31.5 μs
//Paragraph on findings: from these results we find that the insert function
//  is "much slower" than the append function. Its crazy to see how they 
// scale, and how the bigger each function gets the slower the Insert 
// function gets. I am sure the bigger the functions get the slower
// it will get. So the bigger an application gets, this is when these 
// little things will come into play. We need to try to make it as fast
// as possible for the client side.

// extra credit: So through my reasearch on .unshift and .push I
// found that .unshift is so slow because it unshifts all elements
// to the left when something is added which takes much longer than
// just pushing into an array without having to shift everything. 