const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');
 
signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
// const darkModeToggle = document.getElementById('darkModeToggle');
// darkModeToggle.addEventListener('change', () => {
//     document.body.classList.toggle('dark-mode');
//     document.querySelector('header').classList.toggle('dark-mode');
// })