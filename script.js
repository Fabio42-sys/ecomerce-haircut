document.getElementById('openMenu').addEventListener('click', function () {
    let aside = document.getElementById('menuAside')

    if (aside.classList.contains('menu-aside')) {
        aside.classList.remove('menu-aside');
        aside.classList.add('menu-lateral');
    } else {
        aside.classList.remove('menu-lateral');
        aside.classList.add('menu-aside');
    }
});

// Função para carregar e exibir o JSON do arquivo accounts.json
function carregarContas() {
    fetch('barber.json')
        .then(response => response.json())
        .then(data => {
            console.log('Dados das contas:', data);
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
}