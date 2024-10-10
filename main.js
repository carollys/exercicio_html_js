const form = document.getElementById('form-validacao');
let formEValido = false;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoB = document.getElementById ('campo-b').value;
    const campoA = document.getElementById ('campo-a').value;
    const mensagem = campoB > campoA ? 'O campo B é maior que o campo A' : 'O campo B não é maior que o campo A'
    return alert (mensagem)


})

