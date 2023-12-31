let principal = document.querySelector('#pricipal');

for(i = 1; i <= 60; i++){
    principal.innerHTML += `<div class="number">${i}</div>`;
};

function generate(){
    principal.innerHTML = '';
    var randomAraray = [];
    while(randomAraray.length <= 5){
        var random = Math.floor(Math.random()*60);
        if(!randomAraray.includes(random)){
            randomAraray.push(random);
        }

    };
   
    for(i = 1; i <= 60; i++){
        if(randomAraray.includes(i)){
            principal.innerHTML += `<div class="number selected">${i}</div>`;
        }else{
            principal.innerHTML += `<div class="number">${i}</div>`;
        }
    };
};