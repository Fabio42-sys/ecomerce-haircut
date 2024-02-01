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