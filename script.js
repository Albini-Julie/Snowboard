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

var test=false;
        var test2 = false;
        var test3 = false;
        var test4 = false;
        compteurResult = 1;


        var donnees = new XMLHttpRequest();
        donnees.open('GET', 'https://my-json-server.typicode.com/Lugus-Shopify/hiring/product');
        donnees.onreadystatechange = function () {
            listeBrut = donnees.responseText;
            liste = JSON.parse(listeBrut);
            console.log("la liste : ", liste);
            return (liste) 
        };
        donnees.send();

//**var xhr = new XMLHttpRequest();
//**xhr.onreadystatechange = function() {
    //**if (xhr.readyState === 4 && xhr.status === 200) {
     //**   var response = JSON.parse(xhr.responseText);
        // Traitez les données de réponse ici
    //**}
//**};
//**xhr.open('GET', 'https://my-json-server.typicode.com/Lugus-Shopify/hiring/product', true);
//**xhr.send();
//** console.log(xhr)
 //**xhr.onreadystatechange = function() {
 //**   if (xhr.readyState === 4 && xhr.status === 200) {
  //**      var response = JSON.parse(xhr.responseText);
   //**     var resultElement = document.getElementById('result');
       
        // Manipulez les données JSON et générez le contenu HTML
     //**   var htmlContent = '';
     //**   for (var i = 0; i < response.length; i++) {
     //**       var item = response[i];
     //**       htmlContent += '<p>' + item.property + '</p>'; // Exemple : afficher une propriété de l'objet JSON
     //**   }
       
        // Mettez à jour le contenu de l'élément HTML avec les données
     //**   resultElement.innerHTML = htmlContent;
 //**   }
//**};