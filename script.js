// script.js
const toggleButton = document.getElementById('toggle-button');
const stylesheet = document.getElementById('stylesheet');

// Obtener la preferencia del modo oscuro del localStorage
const darkModeEnabled = localStorage.getItem('darkMode');

// Si la preferencia está establecida, aplicar el modo oscuro
if (darkModeEnabled === 'true') {
  document.body.classList.add('dark-mode');
}

// Alternar entre modo oscuro y modo claro al hacer clic en el botón
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Guardar la preferencia en localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.setItem('darkMode', 'false');
  }
});
