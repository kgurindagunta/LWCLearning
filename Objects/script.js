console.log("Objects Learning")

let myDetails ={
    "name": "Kiran",
    "Education": "BTech",
    "Skills": ["Java", "Selenium", "Playwright", "Javascript", "Typescript", "Postman", "Restassured", "SF Admin"],
    "DOB": 1999
    
}

console.log("Type of myDetails", typeof myDetails);
console.log("Details", myDetails)

console.log("Getting 3rd skill in array of Mydeatails: ", myDetails.Skills[2]);

let myDetailString = JSON.stringify(myDetails);

console.log("Stringify Json: ", myDetailString)

let myDetailsJsonParse = JSON.parse(myDetailString);

console.log("Json Parser: ", myDetailsJsonParse)

myDetails.age = 27

console.log("Details after editing age: ", myDetails)

myDetails["Role"] = "Salesforce Automation Tester"

console.log("Details after editing Role like array format: ", myDetails)

//when to chose [] for editing

//myDetails.country Name = "India"  //error

myDetails["country Name"] = "India"

console.log("Details after editing country: ", myDetails)


//Accessing value from Object

//let myCountry = myDetails.country Name //error

let myCountry = myDetails["country Name"]

console.log('Country', myCountry)

let age = myDetails.age

console.log('Age', age)

//Spread Operator

console.log("Spread Operator")

let numberOne = [1,2,3,4]
let numberTwo = [5,6,7,8]

let combined = [...numberOne, ...numberTwo];

console.log('Number one:', numberOne);
console.log('Number two:', numberTwo);
console.log('Combined:', combined);

let a = "Kiran is my name"

console.log('Normal name', a)
console.log("name spread is:", ...a);

//Add elements in Array using spread

numberOne = [9,10,...numberOne, 11,12]

console.log("After adding numbers with spread in middle", numberOne);

//Adding Object

let obj1 = {"fname": "Kiran", "age":27}
let obj2 = {"lname": "Gurindagunta", "skills": ["sf admin", "APex", "Triggers", "flows", "asyncApex", "LWC", "Integrations"]}

let combinedObj = {...obj1, ...obj2}

console.log('Combining Objects', combinedObj)

//copy Arrays

let arr1 = ["Red", "Yellow", "Blue", "Green"]

// if I do arr2 = arr1, and when try to add any element in arr2 it will also add in arr1. To avoid can pick spread
//When taking spread and adding element in arr2 will only add in arr2 and arr1 remains same

let arr2 = [...arr1,"Pink"] // can also do like this arr2 = [...arr1] arr2.push("Pink")

console.log('Elements in arr2', arr2)
console.log('Elements in arr1', arr1) 

//Objects

let spObj = {"name": "Kiran", "education": "B.tech"}

let spObj2 = {...spObj}

spObj2["sex"] = "Male";


console.log('Elements in spObj1', spObj)
console.log('Elements in spObj2', spObj2) 

//Destructuring Element


console.log("Destructuring")

let myFruits = ["apple", "banana", "grapes", "mango"]

//let[myFruits1,myFruits2,myFruits3,myFruits4] = myFruits

//console.log("myFruits2", myFruits2) 

let[myFruits1,myFruits2, ,myFruits3] = myFruits

console.log("Myfruits3 with removing fruit2", myFruits3) // pints mango

let [favFruit1, favFruit2,...rest]= myFruits;

console.log("last two fruits",rest)

//Object


let myNewDetails = {
    "name": "Kiran",
    "day":29
}

let{name,day} = myNewDetails

console.log(name);







