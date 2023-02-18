const link = document.getElementById('super_link');
console.log(link);

const card1 = document.querySelectorAll('.card-link');
for (let index = 0; index < card1.length; index++) {
    card1[index].textContent = 'ссылка';
}

const cardBody = document.querySelectorAll('.card-body .card-link');
console.log(cardBody);

const findAtt = document.querySelector('[data-number = "50"]');
console.log(findAtt);

const title = document.querySelector('title');
console.log(title);

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentElement);

const paragrph = document.createElement('p');
paragrph.textContent = 'Привет';
const card2 = document.querySelector('.card').prepend(paragrph);

const del = document.querySelector('h6');
del.remove();