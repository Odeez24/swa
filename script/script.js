

function initPage (){
  var isOpen = false;
  document.getElementById("openForm").addEventListener("click", defileMembre);
  document.getElementById("submitForm").addEventListener("click", ajout);
}

function defileMembre(e) {
  e.preventDefault();
  if (document.getElementById('form').hidden == false){
    document.getElementById('form').hidden = true;
  } else {
    document.getElementById('form').hidden = false;
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
