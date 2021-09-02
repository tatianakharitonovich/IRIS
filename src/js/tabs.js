const navs = document.querySelectorAll('.main__tabsnav');
const tabsstage = document.querySelectorAll('.main__tabsstage');

navs.forEach((nav, index) => {
  nav.addEventListener('click', (event)=> showContent(event, index))
});

function showContent (event, index) {
  event.preventDefault();

  const links = navs[index].querySelectorAll('li');
  const tags = tabsstage[index].querySelectorAll('.main__tabsstage > div');
  links.forEach(li => li.classList.remove('tab-active'));
  event.target.parentElement.classList.add('tab-active');
  tags.forEach(div => {
    div.style.display = 'none';
    if (('#'+ div.id) === event.target.hash) {
      div.style.display = 'block';
    }
  })  
}