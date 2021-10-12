const navs = document.querySelectorAll('.main__tabsnav');
const tabsstage = document.querySelectorAll('.main__tabsstage');

function showContent(event, index) {
  event.preventDefault();

  const links = navs[index].querySelectorAll('li');
  const tabs = tabsstage[index].querySelectorAll('.main__tabsstage > div');
  links.forEach((li) => li.classList.remove('tab-active'));
  event.target.parentElement.classList.add('tab-active');
  tabs.forEach((div) => {
    div.style.display = 'none';
    if (('#' + div.id) === event.target.hash) {
      div.style.display = 'block';
    }
  });
}

navs.forEach((nav, index) => {
  nav.addEventListener('click', (event) => showContent(event, index));
});

