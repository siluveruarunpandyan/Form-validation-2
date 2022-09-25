'use strict';

//console.log(document.getElementById('title').textContent);
// console.log(document.getElementById('title').textContent);
// console.log(document.getElementById('title').textContent = 'fill the form');
// console.log(document.getElementById('title').style.color = '#12cc15');
// const = 
// console.log(document.getElementById('title'));
// console.log(document.getElementById('title').textContent);
// console.log(document.getElementById('title').textContent = `fill the form`);
// console.log(document.getElementById('title').style.color = '#15aa12');
// const newEl = document.createElement('h2');
// newEl.textContent = 'welcome to my page';
// newEl.style.textAlign = 'center';
// document.querySelector('#contain').appendChild
//(newEl);
//console.log(document.getElementById('email').textContent);

//select elements
const formEl = document.getElementById('form');
const UsernameEl = document.getElementById('Username');
const emailEl = document.getElementById('email');
const mobileEl = document.getElementById('mobile');
const newpasswordEl = document.getElementById('new-password');
const confirmpasswordEl = document.getElementById('confirm-password');

//functions





//events

// formEl.addEventListener('submit', function (event) {
//     event.preventDefault();
//     if(usernameEl.value === ""){
//         const formControlEl = usernameEl.parentElement;
//         formControlEl.classList.add('error');
//     }
//     else{
//         const formControlEl = usernameEl.parentElement;
//         formControlEl.classList.add('success')
//     }
// formEl.addEventListener('submit', function(event){
//     event.preventDefault();
//     if(UsernameEl.value === ''){
//         const formControlEl = UsernameEl.parentElement;
//         formControlEl.classList.add('error');
//     }else{
//         const formControlEl = Username.parentElement;
//         formControlEl.classList.add('succuss');
//     }

//     if(emailEl.value === ''){
//         const formControlEl = emailEl.parentElement;
//         formControlEl.classList.add('error');
//     }else{
//         const formControlEl = emailEl.parentElement;
//         formControlEl.classList.add('succuss');
//     }

//     if(mobileEl.value === ''){
//         const formControlEl = mobileEl.parentElement;
//         formControlEl.classList.add('error');
//     }else{
//         const formControlEl = mobileEl.parentElement;
//         formControlEl.classList.add('succuss');
//     }

//     if(newpasswordEl.value === ''){
//         const formControlEl = newpasswordEl.parentElement;
//         formControlEl.classList.add('error');
//     }else{
//         const formControlEl = newpasswordEl.parentElement;
//         formControlEl.classList.add('succuss');
//     }

// if(confirmpasswordEl.value === ''){
//     const formControlEl = confirmpasswordEl.parentElement;
//     formControlEl.classList.add('error');
// }else{
//     const formcontrolEl = confirmpasswordEl.parentElement;
//     formcontrolEl.classList.add('succuss');
// }
// });

// const inputElArray = [
//     UsernameEl,
// emailEl, 
//      mobileEl, 
//      newpasswordEl, 
//      confirmpasswordEl];


// const checkRequired = function(arr){
//     for (const El of arr){
//         if(El.value === ''){
//             const formcontrolEl = El.parentElement;
//             formcontrolEl.classList.add('error');
//         }else{
//             const formcontrolEl = El.parentElement;
//             formcontrolEl.classList.add('succuss');
//         }
//     }
// };
// // formEl.addEventListener('submit', function(event){
// //     //     event.preventDefault();
// formEl.addEventListener('submit',  function(e){
//     console.log(El);
//     e.preventdefault(); 
//     checkRequired(inputElArray);
// }); 
    
// const inputElArray = [
//         UsernameEl,
//     emailEl, 
//          mobileEl, 
//          newpasswordEl, 
//          confirmpasswordEl];
const inputElArray = [UsernameEl, emailEl,mobileEl,newpasswordEl,confirmpasswordEl];

const checkRequired = function(arr){
    for(const el of arr){
       
        if(el.value === ''){
            const formcontrolEl = UsernameEl.parentElement;
            formcontrolEl.classlist.add('error');
        }else{
            const formcontrol = UsernameEl.parentElement;
            formcontrolEl.classlist.add('succuss');
        }
    }
};

formEl.addEventListener('submit', function(event){
    event.preventDefault();
    checkRequired(inputElArray);
})