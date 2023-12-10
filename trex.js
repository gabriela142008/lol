function funcName(messaje){
    console.log("Function work properly"+ messaje);
    alert("It`s a function" + messaje);
}
let messaje = 4357788
funcName(messaje);











/*
function myFunction(value)[
    if(value < 25){
        alert("Less than need");
    }else if (value==25){
        alert("U win") }
        else{
            alert("more than need");
        }
    }
    my function(25);





let global = 3;
    function calculator(a, b){
        let local= a + b+ global;
    }
    let result = calculator(true,false);
    console.log(result);*/


//     function calcPlus(a, b){
// return a+b;
//     }
//     function calcMinus(a, b){
// return a-b;
//     }
//     function calcDiv(a, b){
// return a/b;
//     }
//     function calcMulti(a, b){
// return a*b;
//     }

    
//     let result = null

//     function mainFunction(opertaion, a, b){
//         if (opertaion == "+"){
//             result = calcPlus(a, b);
//             console.log(result);
//         }

//        else if (opertaion == "-"){
//             result = calcMinus(a, b);
//             console.log(result);
//         }

//        else if (opertaion =="/"){
//             result = calcDiv(a, b);
//             console.log(result);
//         }

//         else if  (opertaion == "*") {
//             result = calcMulti(a, b);
//             console.log(result);
//         }
//     }



let EmptyArray = []; // an empty array 
let ArrayWithValue = ["Red","Green","Blue"]; // an array with value
// console.log(ArrayWithValue);// ["Red","Green","Blue"]
// console.log(ArrayWithValue[0]); // Red
// console.log(ArrayWithValue[1]); // Green
// console.log(ArrayWithValue[2]); // Blue

// console.log(ArrayWithValue.length);
// for (let i = 0; i < ArrayWithValue.length; i++){
//     console.log(ArrayWithValue[i]);
// }
// for (let element of ArrayWithValue){
// console.log(element); // for each
// }






let array = [1];
array.push(2); // smth in the end of array
array.push(3);
array.push(2);
array.unshift(0);

let multidiminsional = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(multidiminsional[2][2])
for (let i = 0)