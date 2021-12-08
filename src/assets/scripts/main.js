const boutonMagique = document.getElementById('magie')
const modale = document.getElementById("modale");
const fermer = document.getElementsByClassName("close")[0];


boutonMagique.addEventListener('click', function(){
    modale.style.display = "block";
});

fermer.addEventListener('click', function(){
    modale.style.display = "none";
});


window.onclick = function(event) {
  if (event.target == modale) {
    modale.style.display = "none";
  }
}