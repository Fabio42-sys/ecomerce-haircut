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