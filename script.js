function change() {
    if (test == true){
        let button = document.getElementById("button");
        button.style.backgroundColor = "#4374EF";
        let button2 = document.getElementById("button2");
        button2.style.backgroundColor = "#FFFFFF";
    }
    else{
        let button = document.getElementById("button");
        button.style.backgroundColor = "#FFFFFF";
        let button2 = document.getElementById("button2");
        button2.style.backgroundColor = "#4374EF";
    }
}

function changeText() {
    if (test2 == true){
        let text = document.getElementById("text");
        text.style.color = "#FFFFFF"
        let text2 = document.getElementById("text2");
        text2.style.color = "#4374EF"
    }
    else{
        let text = document.getElementById("text");
        text.style.color = "#4374EF"
        let text2 = document.getElementById("text2");
        text2.style.color = "#FFFFFF"
    }
}

function change2() {
    if (test3 == true){
        let button3 = document.getElementById("button3");
        button3.style.backgroundColor = "#4374EF";
        let button4 = document.getElementById("button4");
        button4.style.backgroundColor = "#FFFFFF";
    }
    else{
        let button3 = document.getElementById("button3");
        button3.style.backgroundColor = "#FFFFFF";
        let button4 = document.getElementById("button4");
        button4.style.backgroundColor = "#4374EF";
    }
}

function changeText2() {
    if (test4 == true){
        let text3 = document.getElementById("text3");
        text3.style.color = "#FFFFFF"
        let text4 = document.getElementById("text4");
        text4.style.color = "#4374EF"
    }
    else{
        let text3 = document.getElementById("text3");
        text3.style.color = "#4374EF"
        let text4 = document.getElementById("text4");
        text4.style.color = "#FFFFFF"
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

