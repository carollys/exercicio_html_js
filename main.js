const form = document.getElementById('form-validacao');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const campoB = parseFloat(document.getElementById('campo-b').value);
    const campoA = parseFloat(document.getElementById('campo-a').value);
    console.log (campoA , campoB)
    console.log (campoB > campoA)
    const mensagem = campoB > campoA ? 'O campo B é maior que o campo A' : 'O campo B não é maior que o campo A'
    return alert (mensagem)


})

