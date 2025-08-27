const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const span = document.getElementById("close-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


if (document.getElementById('recipeForm')) {

    const modoPreparoInput = document.getElementById('modo-preparo');
    const charCountSpan = document.getElementById('charCount');

    modoPreparoInput.addEventListener('input', function() {
        const currentLenght = modoPreparoInput.value.length;
        charCountSpan.textContent = currentLenght;
    });

    const form = document.getElementById('recipeForm');
    const nomeReceitaInput = document.getElementById('nome-receita');
    const errorMenssage = document.getElementById('errorMensage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nomeReceitaInput.value.trim() === '') {
            errorMenssage.textContent = 'Por favor, preencha o nome da receita.';
        
        } else {
            errorMenssage.textContent = ''

            alert('Receita adicionada com sucesso!');
            form.reset();
            charCountSpan.textContent = 0;
        }
    });
}