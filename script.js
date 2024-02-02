document.getElementById('openMenu').addEventListener('click', function() {
    let aside = document.getElementById('menuAside')

    if (aside.classList.contains('menu-aside')){
        aside.classList.remove('menu-aside');
        aside.classList.add('menu-lateral');
    } else {
        aside.classList.remove('menu-lateral');
        aside.classList.add('menu-aside');
    }
});

document.getElementById('toggle-tema').addEventListener('click', () => {
    let tema = document.getElementById('tema');

    if(tema.classList.contains('troca-invisivel')) {
        tema.classList.remove('troca-invisivel');
        tema.classList.add('troca-visivel');
    } else {
        tema.classList.remove('troca-visivel');
        tema.classList.add('troca-invisivel');
    }
});


/* icones inicio */

let header = document.getElementById('header');
let menu = document.getElementById('openMenu');
let cog = document.getElementById('cog');
let aside = document.getElementById('menuAside');
let user = document.getElementById('user');
let home = document.getElementById('home');
let bell = document.getElementById('bell');
let date = document.getElementById('calendar');
let cart = document.getElementById('cart');
let theme = document.getElementById('switch');
let moon = document.getElementById('tema-escuro');
let sun = document.getElementById('tema-claro');
let angle = document.getElementById('angle');

/* icones fim */ 

/* imgs inicio */

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

/* imgs fim */

/* links inicio */

let config = document.getElementById('config');
let perfil = document.getElementById('perfil');
let casa = document.getElementById('casa');
let paravoce = document.getElementById('4you');
let agnd = document.getElementById('agenda');
let package = document.getElementById('package');
let troca = document.getElementById('tema-switch');
let check = document.getElementById('agnd');
let cabelo = document.getElementById('hair');
let barba = document.getElementById('bear');
let sombrancelha = document.getElementById('eyebow');

/* links fim */

/* importante inicio */

let comod1 = document.getElementById('comodidade1');
let comod2 = document.getElementById('comodidade2');

/* importante fim */

sun.addEventListener('click', () => {
    header.classList.remove('dark');
    menu.classList.remove('dark');
    cog.classList.remove('dark');
    aside.classList.remove('dark');
    user.classList.remove('dark');
    home.classList.remove('dark');
    bell.classList.remove('dark');
    date.classList.remove('dark');
    cart.classList.remove('dark');
    theme.classList.remove('dark');
    moon.classList.remove('dark');
    sun.classList.remove('dark');
    angle.classList.remove('dark');
    img1.classList.remove('dark');
    img2.classList.remove('dark');
    img3.classList.remove('dark');
    config.classList.remove('dark');
    perfil.classList.remove('dark');
    casa.classList.remove('dark');
    paravoce.classList.remove('dark');
    agnd.classList.remove('dark');
    package.classList.remove('dark');
    troca.classList.remove('dark');
    check.classList.remove('dark');
    cabelo.classList.remove('dark');
    barba.classList.remove('dark');
    sombrancelha.classList.remove('dark');
    comod1.classList.remove('dark');
    comod2.classList.remove('dark');
});

moon.addEventListener('click', () => {
    header.classList.remove('dark');
    menu.classList.remove('dark');
    cog.classList.remove('dark');
    aside.classList.remove('dark');
    user.classList.remove('dark');
    home.classList.remove('dark');
    bell.classList.remove('dark');
    date.classList.remove('dark');
    cart.classList.remove('dark');
    theme.classList.remove('dark');
    moon.classList.remove('dark');
    sun.classList.remove('dark');
    angle.classList.remove('dark');
    img1.classList.remove('dark');
    img2.classList.remove('dark');
    img3.classList.remove('dark');
    config.classList.remove('dark');
    perfil.classList.remove('dark');
    casa.classList.remove('dark');
    paravoce.classList.remove('dark');
    agnd.classList.remove('dark');
    package.classList.remove('dark');
    troca.classList.remove('dark');
    check.classList.remove('dark');
    cabelo.classList.remove('dark');
    barba.classList.remove('dark');
    sombrancelha.classList.remove('dark');
    comod1.classList.remove('dark');
    comod2.classList.remove('dark');
});
