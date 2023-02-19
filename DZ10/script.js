const data = JSON.parse(dataInfo);

const content = document.querySelector('.content');

data.forEach(element => {
    const contentBox = document.createElement('div');
    const image = document.createElement('img');
    const fact = document.createElement('p');
    const id = document.createElement('h3');

    image.src = element.file;
    fact.textContent = element.fact;
    id.textContent = element.length;

    content.appendChild(contentBox);
    contentBox.appendChild(id);
    contentBox.appendChild(image);
    contentBox.appendChild(fact);
});
