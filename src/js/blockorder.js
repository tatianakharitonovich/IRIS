const inputsRange = document.querySelectorAll('input[type="range"]');
const inputsProceeds = document.querySelectorAll('.main__blockorder_inputproceeds input[name]');

const blockSelectScenarios = document.querySelectorAll('.main__blockorder_selectScen');
const buttonsAddScenarios = document.querySelectorAll('.main__blockorder_addscen button');
const buttonsCloseScenario = document.querySelectorAll('.main__blockorder_buttonclosescen button');
const scenarioBlocks = document.querySelectorAll('.main__blockorder_selectScenblock');
const scenarioSelects = document.querySelectorAll('.main__blockorder_selectScenblock select');
const priceExpensesString = document
  .querySelectorAll('.main__blockorder_expenses .main__blockorder_priceconnent');
const proceedsString = document
  .querySelectorAll('.main__blockorder_textproceeds .main__blockorder_priceconnent');
const buttonsSubmit = document.querySelectorAll('.main__blockorder_button button');
const formsOrder = document.querySelectorAll('.main__blockorder_form');
const darkLayer = document.getElementById('shadow');
const modalWin = document.getElementById('popupWin');
const buttonCloseWin = document.getElementById('buttonClose');

const priceCashBox = {
  neva: { name: 'Нева-01-Ф', type: 'buyCashbox', price: 3650, rent: 1000, soft: 2500 },
  volga: { name: 'Волга — Днепр — 006', price: 4200, rent: 900, soft: 2700 },
  buy: { type: 'buyCashbox', unit: ' руб' },
  rent: { type: 'rentCashbox', unit: ' руб/мес' },
  soft: { type: 'softCashbox', unit: ' руб' },
};

const priceExpenses = [
  { name: 'Интерактивные видеоуроки', price: 300, proceeds: 20000 },
  { name: 'Автоматические предзаказы', price: 280, proceeds: 19000 },
  { name: 'Видео аналитика', price: 350, proceeds: 22000 },
  { name: 'Оценка эффективности рекламы', price: 330, proceeds: 21000 },
  { name: 'Анализ конкурентов', price: 400, proceeds: 24000 }
];

function numberWithSpaces(x) {
  x = x.toString();
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) {
    x = x.replace(pattern, '$1 $2');
  }
  return x;
}

inputsProceeds.forEach((item, index) => {
  item.value = numberWithSpaces(inputsRange[index].value) + ' руб/мес';
});

function changeInputValue(event, string) {
  const number = numberWithSpaces(event.target.value);
  string.value = number + ' руб/мес';
}

inputsRange.forEach((item, index) => {
  item.addEventListener('input', (event) => changeInputValue(event, inputsProceeds[index]));
});

const selectsCash = document.querySelectorAll('.main__blockorder_selectCash select');
const priceCashString = document
  .querySelectorAll('.main__blockorder_cash .main__blockorder_priceconnent');

const cash = priceCashBox.neva;

priceCashString.forEach((item, index) => {
  if (cash.name === selectsCash[index].value) {
    if (selectsCash[index].name === priceCashBox.buy.type) {
      item.innerHTML = cash.price + priceCashBox.buy.unit;
    }
    if (selectsCash[index].name === priceCashBox.rent.type) {
      item.innerHTML = cash.rent + priceCashBox.rent.unit;
    }
    if (selectsCash[index].name === priceCashBox.soft.type) {
      item.innerHTML = cash.soft + priceCashBox.soft.unit;
    }
  }
});

function changePriceCashString(event, string) {
  for (const key in priceCashBox) {
    if (priceCashBox[key].name === event.target.value) {
      if (event.target.name === priceCashBox.buy.type) {
        string.innerHTML = priceCashBox[key].price + priceCashBox.buy.unit;
      }
      if (event.target.name === priceCashBox.rent.type) {
        string.innerHTML = priceCashBox[key].rent + priceCashBox.rent.unit;
      }
      if (event.target.name === priceCashBox.soft.type) {
        string.innerHTML = priceCashBox[key].soft + priceCashBox.soft.unit;
      }
    }
  }
}

selectsCash.forEach((item, index) => {
  item.addEventListener('change', (event) => changePriceCashString(event, priceCashString[index]));
});

buttonsCloseScenario.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    scenarioBlocks[index].style.display = 'none';
    scenarioSelects[index].value = 'Нет';

    const blocksCompetitor = document.querySelectorAll(`.${scenarioSelects[index].name}`);
    blocksCompetitor.forEach((block) => block.remove());
  });
});

function addScenarios(event, block) {
  event.preventDefault();

  for (let i = 1; i <= block.children.length; i++) {
    if (block.children[i - 1].style.display === 'none') {
      block.children[i - 1].style.display = 'flex';
      return;
    }
  }
}

buttonsAddScenarios.forEach((item, index) => {
  item.addEventListener('click', (event) => addScenarios(event, blockSelectScenarios[index]));
});

function addBlockCompetitor(event, block) {
  function clearlockCompetitor(container) {
    if (event.target.value !== 'Анализ конкурентов') {
      container.remove();
    }
  }

  if (event.target.value === 'Анализ конкурентов') {
    for (let i = 1; i <= 3; i++) {
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
      img.src = 'img/close.png';
      img.width = 19;
      input.name = event.target.name + '_competitors[]';
      input.type = 'text';

      if (i === 3) {
        button.style.visibility = 'hidden';
        button.style.cursor = 'default';
      }

      button.addEventListener('click', (e) => {
        e.preventDefault();
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

      event.target.addEventListener('change', () => clearlockCompetitor(container));
    }
  }
}

scenarioSelects.forEach((item, index) => {
  item.addEventListener('change', (event) => addBlockCompetitor(event, scenarioBlocks[index]));
});

function changePriceExpensesString(index) {
  const selects = blockSelectScenarios[index].querySelectorAll('select');
  const arrayPrices = [];
  const arrayProceeds = [];
  const percentRevenue = inputsRange[index].value * 0.01;

  selects.forEach((item) => {
    priceExpenses.forEach((i) => {
      if (item.value === i.name) {
        arrayPrices.push(i.price);
        arrayProceeds.push(i.proceeds);
      }
    });
  });
  if (arrayPrices.length === 0) {
    priceExpensesString[index].innerHTML = 0 + ' руб/мес';
    proceedsString[index].innerHTML = numberWithSpaces(percentRevenue) + ' руб/мес';
  }
  if (arrayPrices.length > 0) {
    const sumProceeds = arrayProceeds.reduce((s, a) => s + a);
    priceExpensesString[index].innerHTML = arrayPrices.reduce((s, a) => s + a) + ' руб/мес';
    proceedsString[index].innerHTML = numberWithSpaces(sumProceeds + percentRevenue) + ' руб/мес';
  }
}

blockSelectScenarios.forEach((item, index) => {
  item.addEventListener('change', () => changePriceExpensesString(index));
});

blockSelectScenarios.forEach((item, index) => {
  item.addEventListener('click', () => changePriceExpensesString(index));
});

inputsRange.forEach((item, index) => {
  item.addEventListener('input', () => changePriceExpensesString(index));
});

proceedsString.forEach((item, index) => {
  item.innerHTML = numberWithSpaces(inputsRange[index].value * 0.01) + ' руб/мес';
});

function showModalWin(event, index) {
  event.preventDefault();

  let statusInputs = true;
  const inpuntsForm = formsOrder[index].querySelectorAll('input[type="text"]');
  const selectsScen = blockSelectScenarios[index]
    .querySelectorAll('.main__blockorder_selectScenblock select');

  inpuntsForm.forEach((input) => {
    if (!input.value) {
      input.style.border = '3px solid red';
      statusInputs = false;
    }
  });

  inpuntsForm.forEach((item) => {
    item.addEventListener('focus', (e) => { e.target.style.border = 'none'; });
  });

  if (statusInputs) {
    const formOrderActual = jQuery(document.forms[`${formsOrder[index].id}`]).serializeArray();

    openModalWin(formOrderActual);

    inputsRange[index].value = '240000';
    const percentRevenue = inputsRange[index].value * 0.01;
    inputsRange[index].style.backgroundImage = 'var(--g-input-range)';
    selectsCash[index].value = 'Нева-01-Ф';
    inputsProceeds[index].value = numberWithSpaces(inputsRange[index].value) + ' руб/мес';
    priceExpensesString[index].innerHTML = 0 + ' руб/мес';
    proceedsString[index].innerHTML = numberWithSpaces(percentRevenue) + ' руб/мес';

    if (cash.name === selectsCash[index].value) {
      if (selectsCash[index].name === priceCashBox.buy.type) {
        priceCashString[index].innerHTML = cash.price + priceCashBox.buy.unit;
      }
      if (selectsCash[index].name === priceCashBox.rent.type) {
        priceCashString[index].innerHTML = cash.rent + priceCashBox.rent.unit;
      }
      if (selectsCash[index].name === priceCashBox.soft.type) {
        priceCashString[index].innerHTML = cash.soft + priceCashBox.soft.unit;
      }
    }

    selectsScen.forEach((select) => {
      if (select.value === 'Анализ конкурентов') {
        const blocksCompetitorSelect = document.querySelectorAll(`.${select.name}`);
        blocksCompetitorSelect.forEach((item) => item.remove());
      }
      select.value = 'Нет';
    });

    const selectScenblocks = blockSelectScenarios[index]
      .querySelectorAll('.main__blockorder_selectScenblock');

    for (let i = 1; i < selectScenblocks.length; i++) {
      if (selectScenblocks[i].style.display === 'flex') {
        selectScenblocks[i].style.display = 'none';
      }
    }
  }
}

function openModalWin(formOrderActual) {
  darkLayer.style.display = 'block';
  modalWin.style.display = 'flex';

  const buttonSubWin = document.querySelector('.modalwin__blockorder_input button');
  const modalInputs = document.querySelectorAll('.modalwin__blockorder_input input[type="text"]');
  const modalInputPhone = document.querySelector('.modalwin__blockorder_phone input');
  const modalCheckbox = document.querySelector('.modalwin__blockorder_sub input[type="checkbox"]');
  const modalLabel = document.querySelector('.modalwin__blockorder_sub label[for]');


  buttonCloseWin.onclick = closeModalWin;
  darkLayer.onclick = closeModalWin;

  function closeModalWin() {
    darkLayer.style.display = 'none';
    modalWin.style.display = 'none';
    modalCheckbox.checked = !modalCheckbox.checked;
    modalInputs.forEach((item) => {
      item.value = '';
    });
  }

  modalInputPhone.addEventListener('focus', function (setCursorPosition) {
    this.placeholder = '+____________';
    setCursorPosition(1, this);
  });

  modalInputPhone.addEventListener('input', mask, false);

  buttonSubWin.addEventListener('click', sendOrderRequest);

  modalInputs.forEach((item) => {
    item.addEventListener('focus', (event) => { event.target.style.border = '1px solid #35CC79'; });
  });

  modalInputs.forEach((item) => {
    item.addEventListener('blur', (event) => { event.target.style.border = 'none'; });
  });

  function sendOrderRequest(event) {
    event.preventDefault();

    let status = true;

    modalInputs.forEach((item) => {
      if (!item.value) {
        item.style.border = '3px solid red';
        status = false;
      }
    });

    if (!modalCheckbox.checked) {
      modalLabel.style.border = '3px solid red';
      modalLabel.style.borderRadius = '5px';
    }

    if (modalInputPhone.value !== '' &&
      (modalInputPhone.value.includes('_') ||
      modalInputPhone.value.indexOf('+', 0) === -1)) {
      modalInputPhone.style.border = '3px solid red';
    }

    modalLabel.addEventListener('click', (e) => {
      e.target.style.border = 'none';
    });

    if (status &&
      modalCheckbox.checked &&
      !modalInputPhone.value.includes('_') &&
      modalInputPhone.value.indexOf('+', 0) !== -1) {
      const formElement = document.querySelector('form_blockorder');
      const formDataOrder = new FormData(formElement);

      for (let i = 1; i <= formOrderActual.length; i++) {
        formDataOrder.append(formOrderActual[i - 1].name, formOrderActual[i - 1].value);
      }

      closeModalWin();
      setTimeout(() => alert('Спасибо! Ваша заявка принята! С Вами скоро свяжется консультант!'),
        0);


    }
  }
}

buttonsSubmit.forEach((button, index) => {
  button.addEventListener('click', (event) => showModalWin(event, index));
});

