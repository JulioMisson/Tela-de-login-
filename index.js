function togglePasswordVisibility() {
    var eyeIcon = document.getElementById('olho');
    var passwordInput = document.getElementById('senha');

    if (eyeIcon.name === 'eye-off-outline') {
        eyeIcon.name = 'eye-outline'; 
        passwordInput.type = 'text'; 
    } else {
        eyeIcon.name = 'eye-off-outline'; 
        passwordInput.type = 'password'; 
    }
}