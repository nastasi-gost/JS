const dropItem = document.querySelectorAll ('.dropdown-item');
dropItem.forEach(element => {
    element.classList.add ('super-dropdown');
});

const btn = document.querySelector ('.btn');
if (btn.classList.contains('btn-secondary')) {
    btn.classList.remove ('btn-secondary');
} else {
    btn.classList.add ('btn-secondary');
}

const menu = document.querySelector ('.menu');
menu.classList.remove('dropdown-menu');

const elem = document.getElementById('dropdownMenuButton');
elem.id = 'superDropdown';

document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = "3";

const delType = document.querySelector ('.dropdown-toggle');
delType.removeAttribute('type');