export let weekdays = ['Mon', 'Tue']
export const Date_OF_Birth = 1999
export function sayHi(message){
    alert(message);
}
export default function doMul(num1,num2){
    alert(num1+num2);
}
 
function doMultiply(num1,num2){
    alert(num1*num2);
}

export {doMultiply}


function promiseTest(message){
    const prom1 = new Promise((resolve,reject)=>{
      
        if(!message){
            reject('message not found');
        }
        else{
            setTimeout(()=>{
               resolve(`entered message is, ${message}`);
            },5000)
            
        }
    })
    return prom1
}


// promiseTest('Kiran').then((result) => {
//     console.log(result);
//     const name = "gurindagunta"
//     return promiseTest(name)
// }).catch((err) => {
//     console.log(err);
// }).then(result=>{
//     console.log(result);
// });

async function testAsyncPromise() {
    try {
        const result1 = await promiseTest("Test1");
        console.log(result1);

        const result2 = await promiseTest();
        console.log(result2);
    } catch (err) {
        console.log('Error is',err);
    }
}

testAsyncPromise();


async function promiseTestAll(){
    const result1 =  promiseTest("Test1");
    const result2 =  promiseTest("Test2");
    try{
      const allPromises = await Promise.all([result1,result2]);

      console.log('All promises',allPromises)

    }
    catch(err){
        console.log(err);
    }
}
promiseTestAll();

