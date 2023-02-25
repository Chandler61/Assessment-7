
// 1)sum zero: I belive this one to be in the μs zone since
//  there isnt too much info to handle.
function sumZero([]) {
    for(let i = 0; i < largeList; i++){
        if (sumZero + sumZero == 0)
            sumZero.push(largeList[i])
        return true
    }
    return false
}

// 2) unique characters: this one will take bit longer as it is
// a little more complex, but I still think in the μs zone.
function uniChara(str) {
    for (let i = 0; i < str.length; i++){
        if (str.indexOf(str[i]) !== str.lastIndexOf([i]) ) {
            return false;
        }
    }
    return true
}




// 3) pangram sentence: This one I belive to be in the ms zone since it 
// has quite a bit more info to go through. Going over every letter will
// take some time.
allWords = 'abcdefghijklmnopqrstuvwxyz'.split("")

const repeat = (str) => {
    str = str.toLowerCase()
    return allWords.every(x => str.includes(x))
}


// 4) longest word: This one I feel like it will be pretty fast. I think
// it will be in the μs zone.

function whichIsLonger (arr) {
    let = words = ''
    for (let i = 0; i < arr.length; i++) {
        if(word.length < arr[i].length) {
            words = arr[i]
        }
    }
    return words
}
