'use strict';

//console.log(document.getElementById('email'));
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



const inputElArray = [
    UsernameEl,
    emailEl,
    mobileEl,
    newpasswordEl,
    confirmpasswordEl
];

const showError = function(el, message){
    const formControlEl = el.parentElement;
        formControlEl.className = 'form-control error';
        const smallEl = formControlEl.querySelector('small');
        smallEl.textContent = message;
};

const showSuccess = function (el) {
    const formControlEl = el.parentElement;
    formControlEl.className = 'form-control success';
};

const checkRequired = function (arr) {
    for(const el of arr){
        if(el.value === ''){
           showError(el, `${el.name}is required`);
        }else{
           showSuccess(el);
        }
       
    }
};



const checkLength = function (el, min, max) {
    if (el.value.length < min){
       showError(el, `${el.name}should have ${min} characters`);
    }else if(el.value.length > max){
        showError(el, `${el.name} should not be more than ${max} characters`);

    }else{
        showSuccess(el);
    }
};


const passwordMatch = function (elOne, elTwo) {
    if(elOne.value === '' || elTwo.value === '') {
        showError(elOne, 'new password is mandatory');
        showError(elTwo, 'confirm password is mandatory')
    }else{
        if(elOne.value === elTwo.value){
             showSuccess(elOne);
        showSuccess(elTwo);
    }else{
        showError(elOne, 'password do not match');
        //showError(elTwo 'password do not match')
    }
    }
        
};


formEl.addEventListener('submit', function (e){
    e.preventDefault();
    checkRequired(inputElArray);
    checkLength(UsernameEl, 5, 12);
    checkLength(emailEl,5,25);
    checkLength(mobileEl,10,10);
    checkLength(newpasswordEl,8,15);
    passwordMatch(newpasswordEl, confirmpasswordEl);
    });

    

// //functions





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

