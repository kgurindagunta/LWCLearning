import doMul, { doMultiply,sayHi,Date_OF_Birth } from "./scriptBrowser.js";

function clickAction(){
    let ele = document.querySelector('button');
    ele.style.backgroundColor = "red";
}

function handlechange(event){
    console.log(event.target.value);
}

document.addEventListener('valueten', (event)=>{
    console.log('Access Event data', event.detail.message);
})

function changeHandler(event){
    console.log(event.target.value);
    let value = event.target.value;

    if(value ==10){
        const myevent = new CustomEvent('valueten', {
            detail:{
                 message: "user have Entered value 10",
            },
        });
        document.dispatchEvent(myevent);
    }

    
}

let intervalDetails = ''
intervalDetails = setInterval(()=>{
    console.log("Time Interval done")
},5000)

setTimeout(()=>{
   clearInterval(intervalDetails);
   console.log('IntervalDetails is done')
},15000)


console.log('dob', Date_OF_Birth);

doMultiply(2,3)


