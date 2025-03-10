let db = {
    celebrantes: [],
    participantes: [],
    celebracoes: [],
};

function salvarDados(){
    localStorage.setItem('db', JSON.stringify(db))
}

function carregarDados(){
    const dados = LocalStorage.getItem('db');

    if (dados){
        db = JSON.parse(dados);
    }
}

function adicionarCelebrante(){
    const nome = document.getElementById("celebrante_nome").value;
    const nascimento = document.getElementById("celebrante_nascimentp").value;
    const id = db.celebrantes.length + 1;
    db.celebrantes.push({id, nome, nascimento})
    salvarDados();
    listarCelebrantes();
    listarAniversariantes();
}

function adicionarCelebracao(){
    const data = document.getElementById("celebracao_data").value;
    const horario = document.getElementById
}

function listarCelebracoes(){
    let lista = "";
    db.celebracoes.forEach(c => {const celebrante = db.celebrantes.find(x => x.id == c.id_celebrante)?.nome || 'Desconhecido'; lista += `<li>${c.data} - ${c.horario} - ${c.celebrante} <button onclick='excluirCelebracao(${c.id})'>Excluir</button><li>`;})
    document.getElementById('lista_celebracoes').innerHTML = lista;
}

