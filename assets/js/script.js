
let container = document.querySelector('.container');

let principal = document.querySelector('#principal');



let generatedNumbers = document.querySelector('.generated-numbers');

for(i = 1; i <= 60; i++){
    principal.innerHTML += `<div class="number">${i}</div>`;
};



function mega(){
    container.innerHTML = '';
    container.innerHTML = `<h1>Gerar números aleatóreos para a Mega Sena</h1> <div id="principal" class="box-quina shadow">
    </div>`;
    principal = document.querySelector('#principal');
    principal.innerHTML = '';
    for(i = 1; i <= 60; i++){
        principal.classList.add('sena-box')
        principal.innerHTML += `<div class="number">${i}</div>`;
    };
    container.innerHTML += `<button class="generate background-sena shadow" onclick="generate('mega')">Gerar!</button>
    <div class="generated-numbers background-quina shadow">`;
};


function quina(){
    container.innerHTML = '';
    container.innerHTML = `<h1>Gerar números aleatóreos para a Quina</h1> <div id="principal" class="box-quina shadow">
    </div>`;
    principal = document.querySelector('#principal');
    principal.innerHTML = '';
    for(i = 1; i <= 80; i++){
        principal.classList.add('quina-box')
        principal.innerHTML += `<div class="number">${i}</div>`;
    };
    container.innerHTML += `<button class="generate background-quina shadow" onclick="generate('quina')">Gerar!</button>
    <div class="generated-numbers background-quina shadow">`;
};

function lotofacil(){
    container.innerHTML = '';
    container.innerHTML = `<h1>Gerar números aleatóreos para a Loto Fácil</h1> <div id="principal" class="box-quina shadow">
    </div>`;
    principal = document.querySelector('#principal');
    principal.innerHTML = '';
    for(i = 1; i <= 25; i++){
        principal.classList.add('facil-box')
        principal.innerHTML += `<div class="number">${i}</div>`;
    };
    container.innerHTML += `<button class="generate background-facil shadow" onclick="generate('facil')">Gerar!</button>
    <div class="generated-numbers background-quina shadow">`;
};

function lotomania(){
    container.innerHTML = '';
    container.innerHTML = `<h1>Gerar números aleatóreos para a Loto Mania</h1> <div id="principal" class="box-quina shadow">
    </div>`;
    principal = document.querySelector('#principal');
    principal.innerHTML = '';
    for(i = 1; i <= 100; i++){
        principal.classList.add('mania-box')
        principal.innerHTML += `<div class="number">${i}</div>`;
    };
    container.innerHTML += `<button class="generate background-mania shadow" onclick="generate('mania')">Gerar!</button>
    <div class="generated-numbers shadow">`;
};

function generate(jogo){
    let totalNumbers = 0;
    let drawnNumbers = 0;
     let background = '';
    switch(jogo){
        case 'mega':
            totalNumbers = 60;
            drawnNumbers = 6;
            background = 'background-sena';
        break;
        case 'quina':
            totalNumbers = 80;
            drawnNumbers = 5;
            background = 'background-quina';
        break;
        case 'facil':
            totalNumbers = 25;
            drawnNumbers = 15;
            background = 'background-facil';
        break;
        case 'mania':
            totalNumbers = 100;
            drawnNumbers = 50;
            background = 'background-mania';
        break;
    }
    principal = document.querySelector('#principal');
    principal.innerHTML = '';
    generatedNumbers.innerHTML ='';
    var randomAraray = [];
    while(randomAraray.length < drawnNumbers){
        var random = Math.floor(Math.random()*(totalNumbers + 1));
        if(!randomAraray.includes(random) && random != 0){
            randomAraray.push(random);
        }

    };
   
    for(i = 1; i <= totalNumbers ; i++){
        if(randomAraray.includes(i)){
            principal.innerHTML += `<div class="number ${background} shadow">${i}</div>`;
        }else{
            principal.innerHTML += `<div class="number">${i}</div>`;
        }
    };

    generatedNumbers = document.querySelector('.generated-numbers');

    function exit(element){    
        generatedNumbers.innerHTML += `<div class="exit">${element}</div>`;
    }
    randomAraray.forEach(exit);
};

