function change() {
    if (test == true){
        let button = document.getElementById("button");
        button.style.backgroundColor = "#4374EF";
        let button2 = document.getElementById("button2");
        button2.style.backgroundColor = "#FFFFFF";
        button.style.color = "#FFFFFF";
        button2.style.color = "#4374EF";
    }
    else{
        let button = document.getElementById("button");
        button.style.backgroundColor = "#FFFFFF";
        let button2 = document.getElementById("button2");
        button2.style.backgroundColor = "#4374EF";
        button2.style.color = "#FFFFFF";
        button.style.color = "#4374EF";
    }
}

function change2() {
    if (test3 == true){
        let button3 = document.getElementById("button3");
        button3.style.backgroundColor = "#4374EF";
        let button4 = document.getElementById("button4");
        button4.style.backgroundColor = "#FFFFFF";
        button3.style.color = "#FFFFFF";
        button4.style.color = "#4374EF";
    }
    else{
        let button3 = document.getElementById("button3");
        button3.style.backgroundColor = "#FFFFFF";
        let button4 = document.getElementById("button4");
        button4.style.backgroundColor = "#4374EF";
        button4.style.color = "#FFFFFF";
        button3.style.color = "#4374EF";
    }
}

function compteurM(){
    if (compteurResult>1){
    compteurResult--;
    document.getElementById("compteurResult").textContent   = compteurResult;
    }
    else{

    }
}

function compteurP() {
    if (compteurResult<50){
  compteurResult++;
  document.getElementById("compteurResult").textContent   = compteurResult;
    }
    else{

    }
}

