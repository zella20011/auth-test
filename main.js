const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const email = document.getElementById('email')
const password = document.getElementById('password')
const loginButton = document.getElementById('login')

function getChildren(children) {
    for (const child of children) {
        if (child.tagName === 'LABEL') {
            return child;
        }
    }
}

email.addEventListener('focusout', () => {
    const label = getChildren(email.parentElement.children);

    if (email.value) {
        label.classList.add('input-group__label_active');

        if (!email.value.match(mailformat)) {
            email.classList.add('input-group__input_error');
            document.getElementById('email-error').style.display = 'block';
        }
        else {
            email.classList.remove('input-group__input_error');
            document.getElementById('email-error').style.display = 'none';
        }
    } else {
        label.classList.remove('input-group__label_active');
        email.classList.add('input-group__input_error');
        document.getElementById('email-error').style.display = 'block';
    }
});
password.addEventListener('focusout', () => {
    const label = getChildren(password.parentElement.children)

    if (password.value) {
        label.classList.add('input-group__label_active')
        password.classList.remove('input-group__input_error');
        document.getElementById('password-error').style.display = 'none';
    } else {
        label.classList.remove('input-group__label_active')
        password.classList.add('input-group__input_error');
        document.getElementById('password-error').style.display = 'block';
    }
});

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!email.value) {
        email.classList.add('input-group__input_error');
        document.getElementById('email-error').style.display = 'block';
    }

    if (!password.value) {
        password.classList.add('input-group__input_error');
        document.getElementById('password-error').style.display = 'block';
    }
});

