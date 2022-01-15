var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 20000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}