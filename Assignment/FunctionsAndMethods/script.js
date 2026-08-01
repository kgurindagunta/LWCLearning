console.log('Functions---------')

function add(num1,num2){
    return num1+num2;
}

console.log(`addition is ${add(2,3)}`)

let substract =  function(num1,num2){
    return num1-num2;
}

console.log(`substraction is ${substract(2,3)}`)

console.log('Callback Functions')

function squareOfAdditionOfTwoNums(num1,num2,callme){

    let add = num1+num2;
    return callme(add);
}

function multiply(num){
    return num*num;
}

console.log(`substraction is ${squareOfAdditionOfTwoNums(2,3,multiply)}`)

console.log('Methods-------------')

let myDetails = "I am Kiran"

console.log('Length of myDetails is',myDetails.length)

let sliceDetails = myDetails.slice(0,myDetails.length);
console.log('slice is', sliceDetails)

console.log('slice name', myDetails.slice(5))

console.log(`substring is ${myDetails.substring(3,10)}`)

let replace = myDetails.replace('Kiran', 'Gurindagunta')
console.log('Replaced String is', replace);

let uppercase = myDetails.toUpperCase()
console.log('uppercase of string is', uppercase)

//console.log('myDetails', myDetails);

let lowercase = myDetails.toLowerCase();
console.log('lowercase of string is', lowercase);

let anotherString = 'Hello bro'

let concatenation = myDetails.concat(anotherString);
console.log('concatenation of string is', concatenation);

//anotherway to concatenate

let combinedString = `${myDetails} ${anotherString}`
console.log('CombinedString is', combinedString)

let testTrim = ' I am Kiran        '
console.log('normalWithout Trim', testTrim);

console.log('With trim is', testTrim.trim());

let StringArr = myDetails.split(' ')
console.log('Array String is', StringArr);

//join Strings

let arrayToString = StringArr.toString();
console.log('arrayToString is', arrayToString);

//without ,

let joinedString = StringArr.join(" ");
console.log('joinedString is', joinedString);

console.log(joinedString.includes('K'));
console.log(joinedString.includes('k'));

console.log(joinedString.startsWith('I'))
console.log(joinedString.startsWith('q'))
console.log(joinedString.endsWith('n'))
console.log(joinedString.endsWith('a'))

//Remove Duplicates without using Set

let duplicateArray = joinedString.split(' ')

let joinedDuplicate = [...duplicateArray, 'am']

let finalArray = [];
let finalArray1 = [];




    duplicateArray.map((currItem)=>{
    if(!finalArray.includes(currItem)){

        //finalArray.push(currItem);
        finalArray = [...finalArray,currItem];
    }
})

duplicateArray.map((currItem)=>{
    for(let i=0;i<currItem.length;i++){
        if(!finalArray1.includes(currItem[i])|| currItem[i]!=' '){
            finalArray1.push(currItem[i]);
        }
    }
})
console.log('with duplicate is', joinedDuplicate)
console.log('final without Duplicated Array is', finalArray.join(' '))

console.log('final without Duplicated Array in Letter is', finalArray1.join(' '))



console.log('Array Methods')

//Count occurences of a String

let DetailsString = 'i am kiran'

let splitString = DetailsString.split(' ')

let occurence = {};

splitString.forEach(currItem=>{
    for(let i=0;i<currItem.length;i++){
    if(!occurence.hasOwnProperty(currItem[i])){
        occurence[currItem[i]] =1;
    }
    else{
        occurence[currItem[i]] =occurence[currItem[i]]+1;
    }
   }

    }
)

console.log('Occurence of String', occurence);

//print only first letters

let firstLetterWordString = splitString.map(currItem=>{

    return currItem[0]

}).join(' ')

console.log('firstLetterWordString', firstLetterWordString);

 









