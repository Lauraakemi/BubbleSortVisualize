
var lista = [];
var size;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    size = (window.innerWidth - 11) / 10;

    for(let i = 0; i < 10; i++){
        lista.push(-random(50,255));
    }

    frameRate(1);
}

function draw() {
    showItens();
    bubbleSort();
}

function bubbleSort(){
    var swapped = false;
    do {
        swapped = false;
        for(let i = 0; i < 9; i++){
            showItens(i);
            setTimeout(function(){
                if(lista[i] < lista[i+1]){
                    let aux = lista[i+1];
                    lista[i+1] = lista[i];
                    lista[i] = aux;
                    swapped = true;
                }
            });
        }
    } while (swapped);
}

function showItens(i){
    background(0);
    for(item in lista){
        fill(0, 200, -lista[item]);
        rect((size + 2) * item, window.innerHeight, size, 2*lista[item]);
    }
}