// header - кнопки переключения "Портфолио" и "Про меня":
const links = document.querySelectorAll('.promo__header_link');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    links.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  })
})

// взаимодействие с гамбургером и меню:
const promo = document.querySelector('.promo');

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.promo__menu'),
  menuItem = document.querySelectorAll('.promo__menu_item'),
  hamburger = document.querySelector('.promo__hamburger');

  const openMenu = () => {
    hamburger.classList.toggle('promo__hamburger_active');
    menu.classList.toggle('promo__menu_active');
    promo.classList.toggle('promo_active');
  }

  hamburger.addEventListener('click', () => openMenu());

  menuItem.forEach(item =>  item.addEventListener('click', () => openMenu()));

  promo.addEventListener('click', (event) => {
    if (event.target === promo) {
      hamburger.classList.remove('promo__hamburger_active');
      menu.classList.remove('promo__menu_active');
      promo.classList.remove('promo_active');
    }
  });
})