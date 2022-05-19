// costanti dom
const myGrid = document.getElementById('grid');
myArr.forEach(element => {
    const card = document.createElement('div');
    const icon = document.createElement('i');
    const nome = document.createElement('p');
    icon.classList.add(element.family);
    icon.classList.add(element.prefix + element.name);
    console.log(icon);
    nome.innerText = element.name;
    card.append(icon);
    card.append(nome);
    myGrid.append(card);
});