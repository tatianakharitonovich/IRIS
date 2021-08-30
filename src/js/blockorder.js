const inputsRange = document.querySelectorAll('input[type="range"]');
const inputsProceeds = document.querySelectorAll('.main__blockorder_inputproceeds input[name]');

inputsProceeds.forEach((item, index)=> {
    item.value = numberWithSpaces(inputsRange[index].value) + ' руб/мес'});

console.log(inputsProceeds);

inputsRange.forEach((item, index)=> {
    item.addEventListener('input', (event)=> changeInputValue(event, inputsProceeds[index]));
})

function changeInputValue(event, string) {
    number = numberWithSpaces(event.target.value);
    string.value = number + ' руб/мес'
}

function numberWithSpaces(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1 $2");
    return x;
}

const selectsCash = document.querySelectorAll('.main__blockorder_form select[data]');
const priceCashString = document.querySelectorAll('.main__blockorder_cash .main__blockorder_priceconnent');

console.log(selectsCash);
console.log(priceCashString);

const priceCashBox = [
    {name: "Нева-01-Ф", price: 3650, rent: 1000, soft: 2500},
    {name: "Волга — Днепр — 006", price: 4200, rent: 900, soft: 2700}
];

priceCashString.forEach((item, index)=> {
    priceCashBox.forEach(cash => {
        if (cash.name === selectsCash[index].value) {
            if (selectsCash[index].name === 'buyCashbox') {
                item.innerHTML = cash.price + ' руб';
            };
            if (selectsCash[index].name === 'rentCashbox') {
                item.innerHTML = cash.rent + ' руб/мес';
            };
            if (selectsCash[index].name === 'softCashbox') {
                item.innerHTML = cash.soft + ' руб';
            };
        }
    }) 
})

selectsCash.forEach((item, index) => {
    item.addEventListener('change', (event) => changePriceCashString(event, priceCashString[index]))
});

function changePriceCashString (event, string) {
    priceCashBox.forEach(item => {
        if (item.name === event.target.value) {
            if (event.target.name === 'buyCashbox') {
                string.innerHTML = item.price + ' руб';
            };
            if (event.target.name === 'rentCashbox') {
                string.innerHTML = item.rent + ' руб/мес';
            };
            if (event.target.name === 'softCashbox') {
                string.innerHTML = item.soft + ' руб';
            };
        }
    })
}

const blockSelectScenarios = document.querySelectorAll('.main__blockorder_selectScen');
const buttonsAddScenarios = document.querySelectorAll('.main__blockorder_addscen button');
const buttonsCloseScenario = document.querySelectorAll('.main__blockorder_buttonclosescen button');
const scenarioBlocks = document.querySelectorAll('.main__blockorder_selectScenblock');
const scenarioSelects = document.querySelectorAll('.main__blockorder_selectScenblock select');

console.log(blockSelectScenarios);
console.log(buttonsAddScenarios);

console.log(buttonsCloseScenario);
console.log(scenarioBlocks);

buttonsCloseScenario.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        scenarioBlocks[index].style.display = 'none';
        scenarioSelects[index].value = 'Нет';
    })
});

buttonsAddScenarios.forEach((item, index) => {
    item.addEventListener('click', (event) => addScenarios(event, blockSelectScenarios[index]))
});


function addScenarios (event, block) {
    event.preventDefault();

    for (let i=1; i<=block.children.length; i++) {
        if (block.children[i-1].style.display==='none') {
            block.children[i-1].style.display = 'flex';
            return;
        }
    }   
}

scenarioSelects.forEach((item, index) => {
    item.addEventListener('change', (event) => addBlockCompetitor(event, blockSelectScenarios[index]))
});

function addBlockCompetitor (event, block) {
    if (event.target.value === 'Анализ конкурентов') {
        const container = document.createElement('div'),
            label = document.createElement('label'),
            br = document.createElement('br'),
			input = document.createElement('input'),
            buttonContainer = document.createElement('div'),
            button = document.createElement('button');

            event.target.after(container);
            container.append(label);
            label.append(br);
            label.append(input);
            label.after(buttonContainer);
            buttonContainer.append(button);
            
    }
}




