//  Exercise 1

let arr = [1,2,3,4,5,6,7,8,9,10]

function evenNums(arr){
    return arr.filter(e=> e%2 == 0)
}

console.log(evenNums(arr))





//  Exercise 2

let arr = [1,2,3,4,5,6,207,8,9,10]

function largestNum(arr){
    return Math.max(...arr)
}

console.log(largestNum(arr))


//  Exercise 3

let text = "Code Masters";
function reverseString(text) {
    return text.split('').reverse().join('')
}

console.log(reverseString(text))


// Exercise 4

let arr = [1,2,3,5,5,8,9,8,7,1]

function deleteTheDuplicate(arr) {
    newArr = arr.filter((Element,Index) => arr.indexOf(Element) === Index)
    return newArr
}

console.log(deleteTheDuplicate(arr))
