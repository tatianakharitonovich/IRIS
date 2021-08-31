const footerButton = document.querySelector('.footer__blockorder_input button');
const footerInputs = document.querySelectorAll('.footer__blockorder_input input');
const footerCheckbox = document.querySelector('input[type="checkbox"]');
const label = document.querySelector('label[for]');


console.log(footerCheckbox);

footerButton.addEventListener('click', (event) => {
    event.preventDefault();

    footerInputs.forEach(item=>{
        if (!item.value) {
            item.style.border ='3px solid red';
        }
    });

    if (!footerCheckbox.checked) {
        console.log('footerCheckbox');
        label.style.color ='red';
        label.style.fontWeight ='600';
    };

    footerInputs.forEach(item=>{
        item.addEventListener('focus', (event)=>{event.target.style.border ='none';})
    });

    label.addEventListener('click', (event)=> {
        event.target.style.color ='black';
        label.style.fontWeight ='400';
    })

    
    
    
    // fetch('https://api.tachyon-analytics.com/predict/', {
    // 		method: 'POST',
    // 		body: new FormData(footer_order),
    // 	})
    // 	.then(res => res.json())
    // 	.then(json => {
    // 		console.log(json);
    // 		let imgURL ='https://api.tachyon-analytics.com/predict/'+json.url;
    // 		img.src = imgURL;
    // 		img.style.display = 'block';
    // 		img.title = 'click to close';
    // 		img.classList.add('img_prediction');
    // 		modalWin.before(img);
    // 		i++;
    		
	// 		img.addEventListener('click', ()=> {
    // 			img.style.display = 'none';
    // 			numberAttempts.innerHTML = `You have ${4-i} attempt(s)`;
    // 		});
    // 	})
    // 	.catch((err) => {
	// 		let p = document.createElement('p');
	// 		p.innerHTML='"Информация не доступна"';
	// 		modalWin.before(p);
	// 	});
});