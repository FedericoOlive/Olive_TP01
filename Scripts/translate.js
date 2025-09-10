const allLang = {
    es: /* Español */
    {
        /*TODO: Terminar de traducir y Serializar los idiomas. */
        /*FIX: Falta que los artículos se suscriban al cambio de idioma. */
        mainTitle: "Suscripción de Materias",
        mainSubTitle: "Elija las materias que desee aprender",

        howToStep00: "Pasos a Seguir:",
        howToStep01: "Elegir una o varias materias.",
        howToStep02: "Ingresar tus datos.",
        howToStep99: "Enviar",

        formSubcriptionTitle: "Materias Disponibles:",

        formLabelName: "Nombre:",
        formNamePlaceholder: "Escribe tu nombre",

        formLabelEmail: "Email:",
        formEmailPlaceholder: "Escribe tu email",

        formLabelPhone: "Teléfono:",
        formPhonePlaceholder: "Escribe tu teléfono",

        formLabelAge: "Edad:",
        formAgePlaceholder: "Escribe tu edad",

        formLabelMessage: "Mensaje:",
        formMessagePlaceholder: "Escribe tu mensaje",

        cartTitle: "Carrito:",
        sendForm: "Enviar.",

        footer: "Hecho por: Federico Olive - 2025 - 05 - 09"
    },
    en: /* Inglés */
    {

    },
    fr: /* Francés */
    {


    },
    it: /* Italiano */
    {


    },
    pt: /* Portugués */
    {

    }
};

document.addEventListener("DOMContentLoaded", () =>
{
    const languageSection = document.querySelector(".languageSection");

    languageSection.addEventListener("click", (e) =>
    {
        const button = e.target.closest("button");
        if (!button)
            return;

        const lang = button.dataset.lang;
        if (lang)
        {
            changeLanguage(lang);
        }
    });
});

function changeLanguage(lang)
{
    document.getElementById('mainTitle').textContent = allLang[lang].mainTitle;
    document.getElementById('mainSubTitle').textContent = allLang[lang].mainSubTitle;

    document.getElementById('howToStep00').textContent = allLang[lang].howToStep00;
    document.getElementById('howToStep01').textContent = allLang[lang].howToStep01;
    document.getElementById('howToStep02').textContent = allLang[lang].howToStep02;
    document.getElementById('howToStep99').textContent = allLang[lang].howToStep99;

    document.getElementById('formSubcriptionTitle').textContent = allLang[lang].formSubcriptionTitle;
    document.getElementById('formLabelName').textContent = allLang[lang].formLabelName;
    document.getElementById('formLabelEmail').textContent = allLang[lang].formLabelEmail;
    document.getElementById('formLabelPhone').textContent = allLang[lang].formLabelPhone;
    document.getElementById('formLabelAge').textContent = allLang[lang].formLabelAge;
    document.getElementById('formLabelMessage').textContent = allLang[lang].formLabelMessage;

    document.getElementById('nombre').placeholder = allLang[lang].formNamePlaceholder;
    document.getElementById('email').placeholder = allLang[lang].formEmailPlaceholder;
    document.getElementById('telefono').placeholder = allLang[lang].formPhonePlaceholder;
    document.getElementById('edad').placeholder = allLang[lang].formAgePlaceholder;
    document.getElementById('mensaje').placeholder = allLang[lang].formMessagePlaceholder;

    document.getElementById('cartTitle').textContent = allLang[lang].cartTitle;
    document.getElementById('sendForm').textContent = allLang[lang].sendForm;

    document.getElementById('footer').textContent = allLang[lang].footer;
}