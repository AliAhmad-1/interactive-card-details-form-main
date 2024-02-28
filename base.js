const nameinput = document.querySelector('input[name="cardholder_name"]');
const card_number_input = document.querySelector('input[name="card_number"]');
const month_input = document.querySelector('input[name="month"]');
const year_input = document.querySelector('input[name="year"]');
const username = document.querySelector('.user-name');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const card_number = document.querySelector('.card-front-text h5');
const cvc = document.querySelector('.card-back span');
const cvc_input = document.querySelector('input[name="cvc"]');
const confirm_button = document.querySelector('.button-confirm');
const continue_button = document.querySelectorAll('.button-confirm')[1];
const myform = document.forms['myform'];


myform.addEventListener('keyup', (event) => {
    const pattern = /[^0-9]+$/g
    const input_value = event.target.value
    switch (event.target.name) {
        case 'cardholder_name':
            if (input_value !== "") {
                nameinput.classList.remove('error')

                if (Number(input_value) || !pattern.test(input_value)) {
                    document.querySelector('.error-message').classList.remove('hidden')
                    document.querySelector('.error-message').textContent = "invalid error ! , use character only";
                } else {
                    username.textContent = input_value;
                    document.querySelector('.error-message').classList.add('hidden')

                }
            } else {
                nameinput.classList.add('error')
                document.querySelector('.error-message').classList.remove('hidden')
                document.querySelector('.error-message').textContent = "can't be blank";
            }
            break;
        case 'card_number':
            card_number_input.classList.remove('error')
            if (input_value !== "") {
                if (Number(input_value) || !pattern.test(input_value)) {
                    event.target.value = input_value.replace(
                        /(\d{4})(\d{4})(\d{0,4})(\d{0,4})/,
                        '$1 $2 $3 $4'
                    )
                    card_number.textContent = event.target.value;
                    document.querySelectorAll('.error-message')[1].classList.add('hidden');
                } else {
                    document.querySelectorAll('.error-message')[1].classList.remove('hidden');
                    document.querySelectorAll('.error-message')[1].textContent = "invalid input ! , blease enter numbers only."
                }


            } else {
                document.querySelectorAll('.error-message')[1].classList.remove('hidden');
                document.querySelectorAll('.error-message')[1].textContent = "Can't be blank"
            }

            break;
        case 'month':

            if (input_value !== "") {
                month_input.classList.remove('error')
                if (!pattern.test(input_value)) {
                    if (input_value > 12) {

                        document.querySelector('.exp-date .error-message').classList.remove('hidden');
                        document.querySelector('.exp-date .error-message').textContent = "blease enter number between 1-12"
                    } else {
                        month.textContent = event.target.value;
                        document.querySelector('.exp-date .error-message').classList.add('hidden');
                    }


                } else {

                    document.querySelector('.exp-date .error-message').classList.remove('hidden');
                    document.querySelector('.exp-date .error-message').textContent = "Enter number only!"

                }
            } else {

                document.querySelector('.exp-date .error-message').classList.remove('hidden');
                document.querySelector('.exp-date .error-message').textContent = "Can't be blank"
            }

            break;
        case 'year':

            if (input_value !== "") {
                year_input.classList.remove('error')
                if (!pattern.test(input_value)) {
                    if (input_value < 2024) {

                        document.querySelector('.exp-date .error-message').classList.remove('hidden');


                        document.querySelector('.exp-date .error-message').textContent = "Date must be in feature !"
                    } else {
                        year.textContent = input_value;
                        document.querySelector('.exp-date .error-message').classList.add('hidden');
                    }


                } else {
                    document.querySelector('.exp-date .error-message').classList.remove('hidden');
                    document.querySelector('.exp-date .error-message').textContent = "Enter number only!"

                }
            } else {
                document.querySelector('.exp-date .error-message').classList.remove('hidden');
                document.querySelector('.exp-date .error-message').textContent = "Can't be blank"
            }
            break;
        case 'cvc':
            if (input_value !== "") {
                cvc_input.classList.remove('error')
                if (!pattern.test(input_value)) {

                    cvc.textContent = input_value;
                    document.querySelector('.cvc .error-message').classList.add('hidden');



                } else {
                    document.querySelector('.cvc .error-message').classList.remove('hidden');
                    document.querySelector('.cvc .error-message').textContent = "Enter number only!"

                }
            } else {
                document.querySelector('.cvc .error-message').classList.remove('hidden');
                document.querySelector('.cvc .error-message').textContent = "Can't be blank"
            }

            break;

    }
})




const validateField = (field, errorMessage) => {
    if (field.value === "") {
        field.classList.add('error');
        errorMessage.classList.remove('hidden');
        errorMessage.textContent = "can't be blank";
    } else {
        field.classList.remove('error');
        errorMessage.classList.add('hidden');
    }
}

const fields = [
    { input: nameinput, error: document.querySelector('.error-message') },
    { input: card_number_input, error: document.querySelectorAll('.error-message')[1] },
    { input: month_input, error: document.querySelector('.exp-date .error-message') },
    { input: year_input, error: document.querySelector('.exp-date .error-message') },
    { input: cvc_input, error: document.querySelector('.cvc .error-message') }
];

const handler = (event) => {
    event.preventDefault();
    fields.forEach(field => {
        validateField(field.input, field.error);
    });

    if (!fields.some(field => field.input.value === "")) {
        myform.classList.add('hidden');
        document.querySelector('.success').classList.remove('hidden');
    }
}

confirm_button.addEventListener('click', handler);
continue_button.addEventListener('click', () => {
    myform.classList.remove('hidden');
    document.querySelector('.success').classList.add('hidden');
});