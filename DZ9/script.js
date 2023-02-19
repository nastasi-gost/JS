const inputEl = document.getElementById('from');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', function () {
    spanEl.innerHTML = inputEl.value;
});

const messageBtn = document.querySelector('.messageBtn');
const message = document.querySelector('.message');
messageBtn.onclick = function () {
    message.classList.add('animate_animated');
    message.classList.add('animate_fadeInLeftBig');
    message.style.visibility = 'visible';
}

const form = document.querySelector('form');
const control = form.querySelectorAll('input, select');
form.addEventListener('submit', e => {
    control.forEach(control => {
        if (control.value === '') {
            control.classList.add('error');
            e.preventDefault();
        }
    });
});

form.addEventListener('input', event => {
    if (!e.target.classList.contains('form-control')) {
        return;
    }
    e.target.value === '' ? e.target.classList.add('error') : e.target.classList.remove('error');
});