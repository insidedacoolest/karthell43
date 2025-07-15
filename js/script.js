let data = {};

function saveDesignAndGo() {
    saveDesign(); // guarda o design selecionado
    window.location.href = 'textil.html'; // avança para próxima página
}

function saveTextil(textil) {
    data = JSON.parse(localStorage.getItem('faturacaoData')) || {};
    data.textil = textil;
    localStorage.setItem('faturacaoData', JSON.stringify(data));
    window.location.href = 'tamanho.html';
}

function saveTamanho() {
    data = JSON.parse(localStorage.getItem('faturacaoData')) || {};
    data.tamanho = document.getElementById('tamanho').value;
    localStorage.setItem('faturacaoData', JSON.stringify(data));
}

function saveValor() {
    data = JSON.parse(localStorage.getItem('faturacaoData')) || {};
    data.valor = document.getElementById('valor').value;
    localStorage.setItem('faturacaoData', JSON.stringify(data));
}

function savePagamento(pagamento) {
    data = JSON.parse(localStorage.getItem('faturacaoData')) || {};
    data.pagamento = pagamento;
    localStorage.setItem('faturacaoData', JSON.stringify(data));
    window.location.href = 'observacoes.html';
}

function saveObservacoes() {
    data = JSON.parse(localStorage.getItem('faturacaoData')) || {};
    data.observacoes = document.getElementById('observacoes').value;

    fetch('https://script.google.com/macros/s/AKfycbzRRiR9w57688ug6iX14RxeFJ0XWZqB4ByGXZsZWkbwEouEDdcwwcShYHHP2B3VvUfJmA/exec', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.text()).then(console.log);
    localStorage.removeItem('faturacaoData');
}
