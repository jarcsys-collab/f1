'use strict';
const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    navigation.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.focus();
  }
});
const items = [...document.querySelectorAll('.menu-grid article')];
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  items.forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter; });
  document.querySelector('#menu-status').textContent = `${items.filter(item => !item.hidden).length} menu items shown.`;
}));
let temperature = 'hot';
document.querySelectorAll('[data-temp]').forEach(button => button.addEventListener('click', () => {
  temperature = button.dataset.temp;
  document.querySelectorAll('[data-temp]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  items.forEach(item => {
    const extra = temperature === 'iced' && item.dataset.category !== 'bakery' ? 0.5 : 0;
    item.querySelector('.price').textContent = `$${(Number(item.dataset.price) + extra).toFixed(2)}`;
  });
  document.querySelector('#recommendation').textContent = '';
  document.querySelector('#menu-status').textContent = temperature === 'iced' ? 'Iced drinks selected. Fifty cents added to drinks; bakery prices are unchanged.' : 'Hot drinks selected. Standard menu prices shown.';
}));
let previousPick = -1;
document.querySelector('#surprise-button').addEventListener('click', () => {
  const coffees = items.filter(item => item.dataset.category === 'coffee');
  const choices = coffees.map((item, index) => index).filter(index => index !== previousPick);
  const index = choices[Math.floor(Math.random() * choices.length)];
  previousPick = index;
  const name = coffees[index].querySelector('h3').firstChild.textContent.trim();
  document.querySelector('#recommendation').textContent = `Your little pause: ${temperature} ${name} — ${coffees[index].querySelector('.price').textContent}. Enjoy it with a Butter Croissant.`;
});
