const submitButton = document.querySelector('.submit');
const ocultoDiv = document.querySelector('.oculto');
const formContainer = document.querySelector('.form-conatiner');
const emailInput = document.getElementById('email');
const emailDisplay = document.getElementById('emailDisplay');
const acceptButton = document.querySelector('.dismiss');
const parrafoError = document.querySelector('.label p')
submitButton.addEventListener('click', () => {
    const emailValue = emailInput.value.trim();
    if (emailValue) {
        emailDisplay.textContent = emailValue;
        formContainer.style.display = 'none';
        ocultoDiv.style.display = 'block';
    } else {
        emailInput.style.backgroundColor='hsl(6, 35.60%, 88.40%)'
        parrafoError.style.display='block'
        emailInput.style.border= '1px solid hsl(4, 100%, 67%)'
    }
});

acceptButton.addEventListener('click', () => {
    location.reload();
});