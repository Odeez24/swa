function initPage (){
  var isOpen = false;
  document.getElementById("openFormaj").addEventListener("click", defileAjoutMembre);
  document.getElementById("openFormre").addEventListener("click", defileRetireMembre);
  document.getElementById("submitFormaj").addEventListener("click", ajout);
  document.getElementById("submitFormre").addEventListener("click", retire);
}

function defileAjoutMembre(e) {
  e.preventDefault();
  if (document.getElementById("formaj").hidden == false){
    document.getElementById("formaj").hidden = true;
  } else {
    document.getElementById("formaj").hidden = false;
  }
}

function defileRetireMembre(e) {
  e.preventDefault();
  if (document.getElementById("formre").hidden == false){
    document.getElementById("formre").hidden = true;
  } else {
    document.getElementById("formre").hidden = false;
  }
}

function ajout(e){
  e.preventDefault();

  let pseudo = document.getElementById('pseudo').value;
  let desc = document.getElementById('desc').value;
  let role = document.getElementById('role').value;
  let date = document.getElementById('join').value;
  let lien = document.getElementById('lien').value;
}

function retire(e){
  e.preventDefault();
}