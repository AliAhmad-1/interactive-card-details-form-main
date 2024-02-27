const nameinput = document.querySelector('input[name="cardholder_name"]');
const card_number_input = document.querySelector('input[name="card_number"]');
const month_input = document.querySelector('input[name="month"]');
const year_input = document.querySelector('input[name="year"]');
const username = document.querySelector('.user-name');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const card_number = document.querySelector('.card-front-text h5');
const cvc = document.querySelector('.card-back span');
const myform = document.forms['myform'];
myform.addEventListener('submit', (event) => {


    if (nameinput.value.trim() === "") {
        nameinput.setAttribute('class', 'error');
        event.preventDefault();

    }
    if (card_number_input.value.trim() === "") {
        card_number_input.setAttribute('class', 'error');
        event.preventDefault();

    }
    if (month_input.value.trim() === "") {
        month_input.setAttribute('class', 'error');
        event.preventDefault();

    }
    if (year_input.value.trim() === "") {
        year_input.setAttribute('class', 'error');
        document.querySelector('.exp-date .error-message').classList.remove('hidden');
        event.preventDefault();

    } else {
        myform.classList.add('hidden')
        document.querySelector('.success').classList.remove('hidden')
    }
    event.preventDefault();


})
myform.addEventListener('keyup', (event) => {
    switch (event.target.name) {
        case 'cardholder_name':
            username.textContent = event.target.value;

            break;
        case 'card_number':
            card_number.textContent = event.target.value;
            result = parseInt(event.target.value);
            if (!isNaN(result) | result == "") {
                document.querySelector('.error-message').classList.add('hidden')
            } else {
                document.querySelector('.error-message').classList.remove('hidden')
            }

            break;
        case 'month':
            month.textContent = event.target.value;
            if (event.target.value == "") {
                document.querySelector('.exp-date .error-message').classList.remove('hidden');
            } else {

                document.querySelector('.exp-date .error-message').classList.add('hidden');
            }

            break;
        case 'year':
            year.textContent = event.target.value;
            break;
        case 'cvc':
            cvc.textContent = event.target.value;
            if (event.target.value == "") {
                document.querySelector('.cvc .error-message').classList.remove('hidden');
            } else {

                document.querySelector('.cvc .error-message').classList.add('hidden');
            }
            break;

    }





})