function initPage (){
  var isOpen = false;
  document.getElementById("openFormAdd").addEventListener("click", revealAddMember);
  document.getElementById("openFormRemove").addEventListener("click", revealRemoveMember);
  document.getElementById("submitFormAdd").addEventListener("click", Add);
  document.getElementById("submitFormRemove").addEventListener("click", Remove);
}

function revealAddMember(e) {
  e.preventDefault();
  if (document.getElementById("formAdd").hidden == false){
    document.getElementById("formAdd").hidden = true;
  } else {
    document.getElementById("formAdd").hidden = false;
    document.getElementById("msgAdd").hidden = true;
  }
}

function revealRemoveMember(e) {
  e.preventDefault();
  if (document.getElementById("formRemove").hidden == false){
    document.getElementById("formRemove").hidden = true;
  } else {
    document.getElementById("formRemove").hidden = false;
    document.getElementById("msgRemove").hidden = true;
  }
}

function Add(e){
  e.preventDefault();

  let pseudo = document.getElementById('pseudoAdd').value;
  let desc = document.getElementById('desc').value;
  let role = document.getElementById('role').value;
  let date = document.getElementById('join').value;
  let lien = document.getElementById('lien').value;


  const newMember = {
    "Pseudo": pseudo,
    "Description": desc,
    "Rôle": role,
    "Date": date,
    "Réseaux Sociaux": lien,
  };

  fetch('bdd.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

  if (document.getElementById("formAdd").hidden == false){
    document.getElementById("formAdd").hidden = true;
  } else {
    document.getElementById("formAdd").hidden = false;
  }
  if (document.getElementById("msgAdd").hidden == false){
    document.getElementById("msgAdd").hidden = true;
  } else {
    document.getElementById("msgAdd").hidden = false;
  }
}

function Remove(e){
  e.preventDefault();

  if (document.getElementById("formRemove").hidden == false){
    document.getElementById("formRemove").hidden = true;
  } else {
    document.getElementById("formRemove").hidden = false;
  }
  if (document.getElementById("msgRemove").hidden == false){
    document.getElementById("msgRemove").hidden = true;
  } else {
    document.getElementById("msgRemove").hidden = false;
  }
}