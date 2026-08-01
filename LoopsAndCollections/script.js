console.log("Looping")

let cars = ["Maruti","Tata","Mahindra","Hyundai","Renault"]

for(let i=0;i<cars.length;i++){

    console.log(`${i+1}. ${cars[i]}`)

}

let index =0
while(index<cars.length){
    console.log(`${index+1}. ${cars[index]}`)
    index++;
}

// do{
//    console.log("Do while loop")
// }
// while(1==2);

let doindex = 0;

do{
    console.log(`do while loop ${doindex+1}. ${cars[doindex]}`)
    doindex++;
}
while(doindex<cars.length);


for(car of cars){
    console.log(`car is: ${car}`)
}

for(car of cars.entries()){
    console.log(car)
}

for(let[index,car] of cars.entries()){
    console.log(`${index+1}. ${car}`)
}

let obj = {"fname": "kiran", "lname": "Gurindagunta"}

for(ob of Object.keys(obj)){
    console.log(`${ob}`)
    console.log(`Key is ${ob} value is ${obj[ob]}`)
}

for(let[index,value] of Object.entries(obj)){

    console.log(`Key entries is ${index} value is ${value}`)

}




for(car in cars){
    console.log('current item', car)
}

for(car in cars){
    console.log('current item', cars[car])
}

for(let item in obj){
    console.log(item, obj[item])
}

for(car of cars){
    console.log('Car of', car)
}

let officeHours = {
    fri: {open: "10 am", close: "11pm"},
    sat: {open: "9 am", close: "11pm"},
    sun: {open: "8 am", close: "10pm"}
}

for(let time in officeHours){

    console.log("office days:", time)
    console.log("office time:", officeHours[time])
    let{open,close} = officeHours[time]
    console.log(`On ${time} open time is ${open} and close time is ${close}`)
}

for(let [day,{open,close}] of Object.entries(officeHours)){
    console.log(day,open,close)
}

let newmap = new Map();

newmap.set(1,"kiran");
newmap.set("Gurindagunta", "name")
newmap.set(false, "Married");

//console.log(newmap);

for(let [key,value] of newmap){
    console.log(key,value)
}

for(let key of newmap.keys()){
    console.log(key)
}

for(let value of newmap.values()){
    console.log(value)
}



