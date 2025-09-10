
document.querySelectorAll('.sliderContent').forEach(makeSliderDraggable);

let currentLang = 'es';
changeLanguage(currentLang);

/* FIX: En la Web no funciona la carga de Resources porqu le falta el prefijo de "TP01_Olive" */