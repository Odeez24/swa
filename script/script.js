function initPage (){
  var isOpen = false;
  document.getElementById("openFormAdd").addEventListener("click", revealAddMembrer);
  document.getElementById("openFormRemove").addEventListener("click", revealRemoveMembrer);
  document.getElementById("submitFormAdd").addEventListener("click", Add);
  document.getElementById("submitFormRemove").addEventListener("click", Remove);
}

function revealAddMembrer(e) {
  e.preventDefault();
  if (document.getElementById("formAdd").hidden == false){
    document.getElementById("formAdd").hidden = true;
  } else {
    document.getElementById("formAdd").hidden = false;
    document.getElementById("msgAdd").hidden = true;
  }
}

function revealRemoveMembrer(e) {
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

  let pseudo = document.getElementById('pseudo').value;
  let desc = document.getElementById('desc').value;
  let role = document.getElementById('role').value;
  let date = document.getElementById('join').value;
  let lien = document.getElementById('lien').value;

  if (document.getElementById("formaj").hidden == false){
    document.getElementById("formaj").hidden = true;
  } else {
    document.getElementById("formaj").hidden = false;
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