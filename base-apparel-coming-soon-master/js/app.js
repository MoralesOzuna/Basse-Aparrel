const emailInput = document.querySelector('#email');
const emailButton = document.querySelector('.answer-icon');
const mainError = document.querySelector('.main');
const emailSection = document.querySelector('.answer');
const emailSpin = document.querySelector('.sk-chase')


addEventListener("DOMContentLoaded", () =>{
    emailInput.addEventListener("blur", emailValidation);
    
})

function emailValidation(e) {
    let emailContent = e.target.value;
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
    const resultado = regex.test(emailContent);
    emailResult(resultado);
    
}

function emailResult(comprobacion){
    if(comprobacion){
        successfulMessage();
        
    } else{
       
        errorMessage(); 
    }
}

function errorMessage(){
    const existingError = mainError.querySelector('.error-text');


    if(!existingError){ //Si el error no existe lo crea
        const error = document.createElement('div');
        const errorIcon = document.createElement('IMG');

        errorIcon.src = '../images/icon-error.svg';
        error.textContent = 'Please provide a valid email';

        error.classList.add('error-text');
        errorIcon.classList.add('error-icon');
        errorIcon.classList.add('position-absolute');


        mainError.classList.add('position-relative');
        mainError.appendChild(error);
        mainError.appendChild(errorIcon);

        setTimeout(() =>{
        emailInput.value = '';
        error.classList.remove('error-text')
    
        }, 2000)
    

        //Configuramos el temporizado

        setTimeout(() =>{
            mainError.removeChild(error);
            mainError.removeChild(errorIcon);
            
        }, 2000)
    } 
}

function successfulMessage(){
    emailSpin.classList.remove('display-none');
    emailSection.classList.add('display-none');
    setTimeout(() =>{
        emailSpin.classList.add('display-none');
        const success = document.createElement('div');
        success.textContent = `Thank you. We'll Send You an Email Confirmation`;
        success.classList.add('success-text');
        mainError.appendChild(success);
        

    }, 3000)

   

}
