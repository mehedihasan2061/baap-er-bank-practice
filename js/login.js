document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailInput = emailField.value;
    emailField.value = '';

    const passwordField = document.getElementById('user-password');
    const passwordInput = passwordField.value;
    console.log(passwordInput, emailInput)
    if(emailInput==='mehedi@gmail.com' && passwordInput==='206191'){
        window.location.href = 'bank.html';
        
    }
    else {
        alert('invalid user,please provide a valid impormation')
    }
    passwordField.value = '';
})