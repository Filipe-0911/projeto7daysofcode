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
    if (respostaNum1 == 'frontend') {
        perguntasFront();
    } else {
        perguntasBack();
    }

}

function perguntasFront () {
    perguntaNum2 = 'Você quer aprender React ou Vue?'
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas();
}

function perguntasBack() {
    perguntaNum2 = 'Você quer aprender C# ou Java?'
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas();
    
}

function anotarRespostas () {
    //anotar perguntas
    document.getElementById('pergunta1'). innerHTML = perguntaNum1;  
    document.getElementById('pergunta2'). innerHTML = perguntaNum2;

    //anotar respostas
    document.getElementById('resposta1'). innerHTML = respostaNum1;
    document.getElementById('resposta2'). innerHTML = respostaNum2;
    
    alert('Além das tecnologias que você deseja estudar, é sempre bom estudar outras tecnologias caso queira se tornar um fullstack.')
    prompt('Digite quais tecnologias deseja estudar.')
}