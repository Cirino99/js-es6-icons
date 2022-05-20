// costanti dom
const myGrid = document.getElementById('grid');
const select = document.getElementById('filtro-tipo');

select.addEventListener('change',selectArray);
// manipolazion e del dom
select.value = 'all';
stampaElementiArr(myArr);
function selectArray(){
    switch(select.value){
        case 'animal':
            const arrAnimal = myArr.filter((element)=>element.type === 'animal');
            stampaElementiArr(arrAnimal);
            break;
        case 'vegetable':
            const arrVegetable = myArr.filter((element)=>element.type === 'vegetable');
            stampaElementiArr(arrVegetable);
            break;
        case 'user':
            const arrUser = myArr.filter((element)=>element.type === 'user');
            stampaElementiArr(arrUser);
            break;
        default:
            stampaElementiArr(myArr);
    }
}


function stampaElementiArr(arr){
    myGrid.innerHTML = '';
    arr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        const icon = document.createElement('i');
        const nome = document.createElement('p');
        icon.classList.add(element.family);
        icon.classList.add(element.prefix + element.name);
        icon.classList.add(element.color);
        nome.innerText = element.name.toUpperCase();
        card.append(icon);
        card.append(nome);
        myGrid.append(card);
    });
}