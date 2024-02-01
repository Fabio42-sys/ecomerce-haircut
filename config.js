let span = document.getElementById('tema');
let div = document.getElementById('toggle');
let X = document.getElementById('close');

span.addEventListener('click', () => {
    if(div.classList.contains('invisivel')) {
        div.classList.remove('invisivel');
        div.classList.add('visivel');

        X.addEventListener('click', () => {
            div.classList.remove('visivel');
            div.classList.add('invisivel');
        });
    }
});