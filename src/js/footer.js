const footerButton = document.querySelector('.footer__blockorder_input button');
const footerInputs = document.querySelectorAll('.footer__blockorder_input input[type="text"]');
const footerInputPhone = document.querySelector('.footer__blockorder_phone input');
const footerCheckbox = document.querySelector('.footer__blockorder_sub input[type="checkbox"]');
const label = document.querySelector('.footer__blockorder_sub label[for]');

footerInputPhone.addEventListener('focus', function (event) {
    this.placeholder = '+____________';
    setCursorPosition(1, this);
});

footerInputPhone.addEventListener("input", mask, false);

function setCursorPosition(pos, e) {
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        let range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    let matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
    return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}  

footerButton.addEventListener('click', sendFooterRequest);

function sendFooterRequest (event) {
    event.preventDefault();

    let status = true;

    footerInputs.forEach(item => {
        if (!item.value) {
            item.style.border ='3px solid red';
            status = false;
        } 
    });

    if (!footerCheckbox.checked) {
        label.style.border ='3px solid red';
        label.style.borderRadius ='5px';
    };

    if (footerInputPhone.value !='' && (footerInputPhone.value.includes('_') || footerInputPhone.value.indexOf('+', 0) === -1)) {
        footerInputPhone.style.border ='3px solid red';        
    } 

    footerInputs.forEach(item=>{
        item.addEventListener('focus', (event)=>{event.target.style.border ='none';})
    });

    label.addEventListener('click', (event)=> {
        event.target.style.border ='none';
    });

    if (status &&
        footerCheckbox.checked && 
        !footerInputPhone.value.includes('_') && 
        footerInputPhone.value.indexOf('+', 0) != -1 ) {
            // fetch('https://', {
    		//     method: 'POST',
    		//     body: new FormData(footer_order),
    	    // })
    	    // .then(res => res.json())
    	    // .then(json => console.log(json))
            // .catch((err) => console.log(e));

            alert('Спасибо! Ваша заявка принята! С Вами скоро свяжется консультант!');

            // location.reload();
            footerCheckbox.checked = !footerCheckbox.checked;
            footerInputs.forEach(item => {
                item.value ='';
            });                        
    }  
}