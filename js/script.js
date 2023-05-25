const nomeEntrevistado = prompt("Seja bem-vindo ao jogo de Perguntas sobre sua carreira. Digite seu Nome.");
// perguntas
const perguntaNum1 = 'Você deseja ser frontend ou backend?'
let perguntaNum2;
let perguntaNum3;
let perguntaNum4;
// respostas
let respostaNum1;
let respostaNum2;
let respostaNum3;
let respostaNum4;


apresentacao();


function apresentacao(){
    alert('Olá ' + nomeEntrevistado + ', meu nome é JavaScript.')
    alert('Neste jogo, farei perguntas a respeito de carreiras na área de tecnologia.')
    let iniciar = prompt ('Podemos começar?')

    if (iniciar == 'sim') {
        perguntas();
    } else {
        alert('Responda sim nesta pergunta para iniciarmos');
        apresentacao();
    }
}
function perguntas() {
    respostaNum1 = prompt(perguntaNum1)
    if (respostaNum1 == 'frontend' || respostaNum1 == 'front') {
        perguntasFront();
    } else {
        perguntasBack();
    }

}

function perguntasFront () {
    perguntaNum2 = 'Você quer aprender React ou Vue?'
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas ();
}

function perguntasBack() {
    perguntaNum2 = 'Você quer aprender C# ou Java?'
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas ();
    
}

function anotarRespostas () {
    //anotar perguntas
    document.getElementById('pergunta1'). innerHTML = perguntaNum1;  
    document.getElementById('pergunta2'). innerHTML = perguntaNum2;

    //anotar respostas
    document.getElementById('resposta1'). innerHTML = respostaNum1;
    document.getElementById('resposta2'). innerHTML = respostaNum2;
        
}

const especializacaoBack = () => {
    let tecnologiasNovas;
    let learnPython = 'Para estudar <span class="backend">python</span> clique <a href="https://cursos.alura.com.br/formacao-Python-linguagem">aqui</a>';
    let learnPHP = 'Para estudar <span class="backend">php</span> clique <a href="https://cursos.alura.com.br/formacao-linguagem-php">aqui</a>';
    let learnNodejs = 'Para estudar <span class="backend">NodeJS</span> clique <a href="https://cursos.alura.com.br/formacao-node-js-express">aqui</a>';
    let especializacaoItens = document.getElementById('span__especializacao__itens');

    alert('Além das tecnologias que você deseja estudar, é sempre bom estudar outras tecnologias caso queira se tornar um fullstack.')
    tecnologiasNovas = prompt('Digite quais tecnologias deseja estudar.')

    if (tecnologiasNovas == 'python' || tecnologiasNovas == 'py') {
        especializacaoItens.innerHTML = learnPython
    } else if (tecnologiasNovas == 'php' || tecnologiasNovas == 'PHP') {
        especializacaoItens.innerHTML = learnPHP
    } else if (tecnologiasNovas == 'nodejs' || tecnologiasNovas == 'NodeJS') {
        especializacaoItens.innerHTML = learnNodejs
    }
}
