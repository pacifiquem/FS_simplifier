const addEvents = () => {

    //Event for password input in both views
    const passwordInput = document.getElementById('pass-input');
    passwordInput.setAttribute('onfocus', 'displayLabel()');
    passwordInput.setAttribute('onblur', 'displayPlaceholder()');


};

const displayLabel = () => {
    const label = document.getElementById("para-label");
    const passInput = document.getElementById('pass-input');

    label.setAttribute('class', 'password-label-true ');
    label.removeAttribute('style');

    passInput.removeAttribute('placeholder');
};

const displayPlaceholder = () => {
    const passInput = document.getElementById('pass-input');
    passInput.setAttribute('placeholder', 'Enter password');

    const label = document.getElementById("para-label");
    label.setAttribute('style', 'display: none;');
};