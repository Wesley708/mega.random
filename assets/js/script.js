
let container = document.querySelector('.container');

let principal = document.querySelector('#principal');


let generatedNumbers = document.querySelector('.generated-numbers');

generateScreen('Mega Sena');

// for(i = 1; i <= 60; i++){
//     principal.innerHTML += `<div class="number">${i}</div>`;
// };


function generateScreen(jogo){

    container.innerHTML ='';
    var background = '';
    var generate = '';
    var box = '';
    var totalNumbers = 0;
    var drawnNumbers = 0;
    switch(jogo){
        case 'Mega Sena':
            background = 'background-sena';
            generate = 'mega';
            box = 'sena-box';
            totalNumbers = 60;
            drawnNumbers = 6;
        break;
        case 'Quina':
            background = 'background-quina';
            generate = 'quina';
            box = 'quina-box';
            totalNumbers = 80;
            drawnNumbers = 5;
        break;
        case 'Loto Fácil':
            background = 'background-facil';
            generate = 'facil';
            box = 'facil-box';
            totalNumbers = 25;
            drawnNumbers = 15;
        break;
        case 'Loto Mania':
            background = 'background-mania';
            generate = 'mania';
            box = 'mania-box';
            totalNumbers = 100;
            drawnNumbers = 50;
        break;
    }

        container.innerHTML += `<h1>Gerar números aleatóreos para a ${jogo}!</h1>`;

        container.innerHTML += `<div id="principal"  class=""></div>`;

        var principal = document.querySelector('#principal');

        for(i = 1; i <= totalNumbers; i++){
            principal.classList.add(box)
            principal.innerHTML += `<div class="number">${i}</div>`;
        };
        container.innerHTML += `<button class="generate ${background} shadow" onclick="generate('${generate}')">Gerar!</button>
        <div id="generated-numbers" class="generated-numbers shadow">`;
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
        generatedNumbers.innerHTML += `<div class="exit ${background} shadow">${element}</div>`;
    }

    let asc = randomAraray.sort(function(a, b){
        return a - b;
    });

    asc.forEach(exit);
};

