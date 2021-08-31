const inputsRange = document.querySelectorAll('input[type="range"]');
const inputsProceeds = document.querySelectorAll('.main__blockorder_inputproceeds input[name]');

const blockSelectScenarios = document.querySelectorAll('.main__blockorder_selectScen');
const buttonsAddScenarios = document.querySelectorAll('.main__blockorder_addscen button');
const buttonsCloseScenario = document.querySelectorAll('.main__blockorder_buttonclosescen button');
const scenarioBlocks = document.querySelectorAll('.main__blockorder_selectScenblock');
const scenarioSelects = document.querySelectorAll('.main__blockorder_selectScenblock select');
const priceExpensesString = document.querySelectorAll('.main__blockorder_expenses .main__blockorder_priceconnent');
const proceedsString = document.querySelectorAll('.main__blockorder_textproceeds .main__blockorder_priceconnent');

inputsProceeds.forEach((item, index)=> {
    item.value = numberWithSpaces(inputsRange[index].value) + ' руб/мес'});

console.log(inputsProceeds);

inputsRange.forEach((item, index)=> {
    item.addEventListener('input', (event)=> changeInputValue(event, inputsProceeds[index]));
});

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

const priceExpenses = [
    {name: "Интерактивные видеоуроки", price: 300, proceeds: 20000},
    {name: "Автоматические предзаказы", price: 280, proceeds: 19000},
    {name: "Видео аналитика", price: 350, proceeds: 22000},
    {name: "Оценка эффективности рекламы", price: 330, proceeds: 21000},
    {name: "Анализ конкурентов", price: 400, proceeds: 24000}
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

console.log(blockSelectScenarios);
console.log(buttonsAddScenarios);

console.log(buttonsCloseScenario);
console.log(scenarioSelects);

buttonsCloseScenario.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        scenarioBlocks[index].style.display = 'none';
        scenarioSelects[index].value = 'Нет';

        const blocksCompetitor = document.querySelectorAll(`.${scenarioSelects[index].name}`);
        console.log(blocksCompetitor);
        blocksCompetitor.forEach(item=> item.remove());
    });

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
    item.addEventListener('change', (event) => addBlockCompetitor(event, scenarioBlocks[index]))
});

function addBlockCompetitor (event, block) {
    if (event.target.value === 'Анализ конкурентов') {
        for (let i=1; i<=3; i++) {
            const container = document.createElement('div');
            const label = document.createElement('label');
            const br = document.createElement('br');
            const input = document.createElement('input');
            const buttonContainer = document.createElement('div');
            const button = document.createElement('button');
            const img = document.createElement('img');

            container.classList.add('main__blockorder_selectScenblock');
            container.classList.add(`${event.target.name}`);
            label.classList.add('main__blockorder_label');
            label.innerHTML = 'Добавьте конкурента';
            buttonContainer.classList.add('main__blockorder_buttonclosescen');
            img.src='img/close.png';
            img.width = 19;
            input.name = event.target.name + ` competitor ${i}`;
            console.log(container);

            if (i===3) {
                button.style.visibility ='hidden';
                button.style.cursor = 'default';
            }

            button.addEventListener('click', (event) => {
                event.preventDefault();
                container.remove();
                input.value = '';
            });

            block.after(container);
            container.append(label);
            label.append(br);
            label.append(input);
            label.after(buttonContainer);
            buttonContainer.append(button);
            button.append(img);

            event.target.addEventListener('change', clearlockCompetitor);
            function clearlockCompetitor (event) {
                if (event.target.value !='Анализ конкурентов') {
                    container.remove();
                }
            }
        }            
    }
}

blockSelectScenarios.forEach((item, index) => {
    item.addEventListener('change', (event) => changePriceExpensesString(event, index))
});

blockSelectScenarios.forEach((item, index) => {
    item.addEventListener('click', (event) => changePriceExpensesString(event, index))
});

inputsRange.forEach((item, index)=> {
    item.addEventListener('input', (event)=> changePriceExpensesString(event, index));
});


function changePriceExpensesString (event, index) {
    console.log(blockSelectScenarios[index].children);
    const selects = blockSelectScenarios[index].querySelectorAll('select');
    const arrayPrices=[];
    const arrayProceeds=[];
    
    selects.forEach(item => {
        console.log(item.value);
        priceExpenses.forEach(i =>{
            if (item.value===i.name) {
                arrayPrices.push(i.price);
                arrayProceeds.push(i.proceeds);
            }
        })
    });
    if (arrayPrices.length ===0) {
        priceExpensesString[index].innerHTML=0 + ' руб/мес';
        proceedsString[index].innerHTML = numberWithSpaces(inputsRange[index].value*0.01) + ' руб/мес';
    };
    if (arrayPrices.length>0) {
        priceExpensesString[index].innerHTML = arrayPrices.reduce((s,a)=> s+a) + ' руб/мес';
        proceedsString[index].innerHTML = numberWithSpaces(arrayProceeds.reduce((s,a)=> s+a) + inputsRange[index].value*0.01) + ' руб/мес';
    };
}

proceedsString.forEach((item, index)=> {
    item.innerHTML = numberWithSpaces(inputsRange[index].value*0.01) + ' руб/мес';    
});


