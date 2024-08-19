let currentColumn = 2;
function showColumn(col) {
  const ths = document.querySelectorAll("th");
  const tds = document.querySelectorAll("td");
  // Masquer toutes les colonnes sauf celle à afficher
  ths.forEach((th, index) => {
    if (index === 0 || index + 1 === col) {
      th.style.display = "table-cell";
    } else {
      th.style.display = "none";
    }
  });
  tds.forEach((td) => {
    if (td.cellIndex === 0 || td.cellIndex + 1 === col) {
      td.style.display = "table-cell";
    } else {
      td.style.display = "none";
    }
  });
}
function nextColumn() {
  if (currentColumn < 4) {
    currentColumn++;
    showColumn(currentColumn);
    updateButtonState();
  }
}
function prevColumn() {
  if (currentColumn > 2) {
    currentColumn--;
    showColumn(currentColumn);
    updateButtonState();
  }
}

function updateButtonState() {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const HideButton = document.querySelectorAll(".HideButton");
  const paddingRight = document.querySelectorAll(".paddingRight");
  const paddingLeft = document.querySelectorAll(".paddingLeft");

  // Mise à jour de l'état des boutons en fonction de la largeur de l'écran
  if (window.innerWidth > 768) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    HideButton.forEach((button) => (button.style.display = "none"));
    paddingRight.forEach((th) => (th.style.paddingRight = ""));
    paddingLeft.forEach((th) => (th.style.paddingLeft = ""));
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
    HideButton.forEach((button) => (button.style.display = ""));
    paddingRight.forEach((th) => (th.style.paddingRight = "50px"));
    paddingLeft.forEach((th) => (th.style.paddingLeft = "50px"));
  }
}

// Initialiser avec les colonnes 1 et 2 visibles sous 768px
if (window.innerWidth <= 768) {
  showColumn(currentColumn);
}
// Réinitialiser l'affichage et l'état des boutons lors du redimensionnement de la fenêtre
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const ths = document.querySelectorAll("th");
    const tds = document.querySelectorAll("td");
    ths.forEach((th) => (th.style.display = "table-cell"));
    tds.forEach((td) => (td.style.display = "table-cell"));
  } else {
    showColumn(currentColumn);
  }
  updateButtonState();
});
// Vérifier l'état des boutons au chargement
updateButtonState();
