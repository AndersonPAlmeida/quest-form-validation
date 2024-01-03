const button = document.querySelector('.send');
const inputs = document.querySelectorAll('.information');
const errors = document.querySelectorAll('.errors');

function handleInputChange(input) {
    if (input.value !== '') {
        input.classList.add('input-success');
        input.classList.remove('input-error');
        hideError(`.error-${input.name}`);
        hideError(`.error-${input.name}-validate`);
    } else {
        input.classList.remove('input-success');
    }
}

function showError(selector) {
    const errorElement = document.querySelector(selector);
    if (errorElement) {
        errorElement.style.display = 'block';
    }
}

function hideError(selector) {
    const errorElement = document.querySelector(selector);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

function validateEmail(input) {
    if (input.name === 'email') {
        const emailCut = input.value.split('@');

        if (emailCut.length === 1 || (emailCut.length === 2 && (emailCut[0] === '' || emailCut[1] === ''))) {
            input.classList.add('input-error');
            showError('.error-email-validate');
        } else {
            hideError('.error-email-validate');
        }
    }
}

function handleButtonClick(event) {
    event.preventDefault();

    let hasErrors = false;

    inputs.forEach(input => {
        handleInputChange(input);
        if (input.value === '') {
            input.classList.add('input-error');
            showError(`.error-${input.name}`);
            hasErrors = true;
        }
        validateEmail(input);
    });

    if (!hasErrors) {
        console.log('Formulário válido. Enviar dados.');
    }
}

inputs.forEach(input => {
    input.addEventListener('change', () => {
        handleInputChange(input);
    });
});

button.addEventListener('click', handleButtonClick);