const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const email = document.getElementById('email')
const password = document.getElementById('password')
const loginButton = document.getElementById('login')

function AddLabelClass(element, type) {
    element.addEventListener('focusout', () => {
        const children = element.parentElement.children
        let label

        for (const child of children) {
            if (child.tagName === 'LABEL') {
                label = child
            }
        }

        if (element.value) {
            label.classList.add('input-group__label_active')

            if (type === 'email' && !element.value.match(mailformat)) {
                element.classList.add('input-group__input_error');
                document.getElementById('email-error').style.display = 'block';
            }
            else {
                element.classList.remove('input-group__input_error');
                document.getElementById('email-error').style.display = 'none';
            }
        } else {
            label.classList.remove('input-group__label_active')
        }
    })
}

AddLabelClass(email, 'email')
AddLabelClass(password, 'password')

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!email.value) {
        email.classList.add('input-group__input_error');
        document.getElementById('email-error').style.display = 'block';
    } else {
        email.classList.remove('input-group__input_error');
        document.getElementById('email-error').style.display = 'none';
    }
})

