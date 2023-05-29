const nomeEntrevistado = prompt("Seja bem-vindo ao jogo de Perguntas sobre sua carreira. Digite seu Nome.");
// perguntas
const perguntaNum1 = 'Você deseja ser frontend ou backend?';
const botao = document.querySelector('#js-apresentacao');
const botaoEspecializacao = document.querySelector('#botao__sim');
let perguntaNum2;
let perguntaNum3;
let perguntaNum4;
// respostas
let respostaNum1;
let respostaNum2;
let respostaNum3;
let respostaNum4;
//arrays da especializacao
let tecnologiasBack = [`python`, `PHP`, `NodeJS`];
let tecnologiasBackLearn = [`Para estudar <span class="backend">python</span> clique <a href="https://cursos.alura.com.br/formacao-Python-linguagem" target="_blank">aqui</a>`,
    `Para estudar <span class="backend">php</span> clique <a href="https://cursos.alura.com.br/formacao-linguagem-php" target="_blank">aqui</a>`,
    `Para estudar <span class="backend">NodeJS</span> clique <a href="https://cursos.alura.com.br/formacao-node-js-express" target="_blank">aqui</a>`];



botao.addEventListener("click", () => {
    apresentacao();
})

const chamadaParaJogo = () => {
    document.getElementById('apresentacao__jogo').innerHTML = `Olá, ${nomeEntrevistado}. Meu nome é JavaScript. Para iniciar o Jogo clique no botão abaixo.`
}

const especializacaoBack = () => {

    let tecnologiasNovas;
    let especializacaoItens = document.getElementById('span__especializacao__itens');

    alert('Além das tecnologias que você deseja estudar, é sempre bom estudar outras tecnologias caso queira se tornar um fullstack.')
    tecnologiasNovas = prompt(`Escolha uma das linguagens abaixo:
   python; 
   PHP; 
   NodeJS`);

    for (let i = 0; i < 3; i++) {
        if (tecnologiasNovas == tecnologiasBack[i]) {
            especializacaoItens.innerHTML = tecnologiasBackLearn[i]
        }
    }

    
        switch (tecnologiasNovas) {
            case 'Python': console.log('Python');
                especializacaoItens.innerHTML = tecnologiasBackLearn[0];
                break;
            case 'php': console.log('php');
                especializacaoItens.innerHTML = tecnologiasBackLearn[1];
                break;
            case 'nodejs': console.log('NodeJS');
                especializacaoItens.innerHTML = tecnologiasBackLearn[2];
                break;
            case 'todos': console.log('todos');
                especializacaoItens.innerHTML = tecnologiasBackLearn;
                break;

        }
    
   
}

botaoEspecializacao.addEventListener("click", () => {
    especializacaoBack()
})

chamadaParaJogo();

function apresentacao() {
    alert('Neste jogo, farei perguntas a respeito de carreiras na área de tecnologia.');
    let iniciar = prompt('Podemos começar?');

    if (iniciar == 'sim') {
        perguntas();
    } else {
        while (iniciar != 'sim') {
            alert('Responda sim nesta pergunta para iniciarmos');
            apresentacao();
            break;
        }
    }
}

function perguntas() {
    respostaNum1 = prompt(perguntaNum1)
    if (respostaNum1 == 'frontend' || respostaNum1 == 'front' || respostaNum1 == 'Frontend') {
        perguntasFront();
    } else {
        perguntasBack();
    }
}

function perguntasFront() {
    perguntaNum2 = 'Você quer aprender React ou Vue?';
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas();
}

function perguntasBack() {
    perguntaNum2 = 'Você quer aprender C# ou Java?';
    respostaNum2 = prompt(perguntaNum2);
    anotarRespostas();
}

function anotarRespostas() {
    //anotar perguntas
    document.getElementById('pergunta1').innerHTML = perguntaNum1;
    document.getElementById('pergunta2').innerHTML = perguntaNum2;

    //anotar respostas
    document.getElementById('resposta1').innerHTML = respostaNum1;
    document.getElementById('resposta2').innerHTML = respostaNum2;
}