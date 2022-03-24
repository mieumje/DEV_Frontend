// function outter(){
//     function inner(){
//         let name = "MJ";
//         console.log(name);
//     }
//     inner();
// }
// outter();

// function outter(){
//     let name = "MJ";        // 외부 함수에 선언된 지역변수
//     function inner(){       // inner 함수는 name 이라는 지역 변수가 없음
//         console.log(name);
//     }
//     inner();
// }
// outter();

// function outter(){
//     let name = "MJ";        // 외부 함수에 선언된 지역변수
//     return function (){       // inner 함수는 name 이라는 지역 변수가 없음
//         console.log(name);
//     }
    
// }
// let innerFunction = outter();
// innerFunction();

// function outter(){
//     let name = "MJ";
//     return function (){
//         function secIn(){
//             console.log(name);
//         }
//         let name = "Minje"
//         secIn();   
//     }
// }
// let innerFunction = outter();
// innerFunction();


// const customerSetName = (name) => {
//     return{
//         setName : (newName) => {
//             name = newName;
//         },
//         getName : () => {
//             let customerName = name;
//             return customerName
//         }
//     }
// }

// let personMinJe = customerSetName('MinJe');
// let personMJ = customerSetName('MJ');

// console.log(personMinJe.getName());
// console.log(personMJ.getName());

// personMJ.setName('MINJE');

// console.log(personMinJe.getName());
// console.log(personMJ.getName());