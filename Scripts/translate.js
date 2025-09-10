const allLang = {
    es:
    {
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
        sendForm: "Enviar",

        addCartButton: "Agregar",
        removeCartButton: "Quitar",

        footer: "Hecho por: Federico Olive - 2025 - 05 - 09"
    },
    en:
    {
        mainTitle: "Course Subscription",
        mainSubTitle: "Choose the subjects you want to learn",

        howToStep00: "Steps to Follow:",
        howToStep01: "Choose one or more subjects.",
        howToStep02: "Enter your details.",
        howToStep99: "Send",

        formSubcriptionTitle: "Available Subjects:",

        formLabelName: "Name:",
        formNamePlaceholder: "Enter your name",

        formLabelEmail: "Email:",
        formEmailPlaceholder: "Enter your email",

        formLabelPhone: "Phone:",
        formPhonePlaceholder: "Enter your phone",

        formLabelAge: "Age:",
        formAgePlaceholder: "Enter your age",

        formLabelMessage: "Message:",
        formMessagePlaceholder: "Enter your message",

        cartTitle: "Cart:",
        sendForm: "Send",

        addCartButton: "Add",
        removeCartButton: "Remove",

        footer: "Made by: Federico Olive - 2025 - 05 - 09"
    },
    fr:
    {
        mainTitle: "Abonnement aux Cours",
        mainSubTitle: "Choisissez les matières que vous souhaitez apprendre",

        howToStep00: "Étapes à Suivre :",
        howToStep01: "Choisir une ou plusieurs matières.",
        howToStep02: "Entrez vos informations.",
        howToStep99: "Envoyer",

        formSubcriptionTitle: "Matières Disponibles :",

        formLabelName: "Nom :",
        formNamePlaceholder: "Entrez votre nom",

        formLabelEmail: "Email :",
        formEmailPlaceholder: "Entrez votre email",

        formLabelPhone: "Téléphone :",
        formPhonePlaceholder: "Entrez votre téléphone",

        formLabelAge: "Âge :",
        formAgePlaceholder: "Entrez votre âge",

        formLabelMessage: "Message :",
        formMessagePlaceholder: "Entrez votre message",

        cartTitle: "Panier :",
        sendForm: "Envoyer",

        addCartButton: "Ajouter",
        removeCartButton: "Supprimer",

        footer: "Fait par : Federico Olive - 2025 - 05 - 09"
    },
    it:
    {
        mainTitle: "Iscrizione ai Corsi",
        mainSubTitle: "Scegli le materie che vuoi imparare",

        howToStep00: "Passaggi da Seguire:",
        howToStep01: "Scegli una o più materie.",
        howToStep02: "Inserisci i tuoi dati.",
        howToStep99: "Invia",

        formSubcriptionTitle: "Materie Disponibili:",

        formLabelName: "Nome:",
        formNamePlaceholder: "Inserisci il tuo nome",

        formLabelEmail: "Email:",
        formEmailPlaceholder: "Inserisci la tua email",

        formLabelPhone: "Telefono:",
        formPhonePlaceholder: "Inserisci il tuo telefono",

        formLabelAge: "Età:",
        formAgePlaceholder: "Inserisci la tua età",

        formLabelMessage: "Messaggio:",
        formMessagePlaceholder: "Inserisci il tuo messaggio",

        cartTitle: "Carrello:",
        sendForm: "Invia",

        addCartButton: "Aggiungi",
        removeCartButton: "Rimuovi",

        footer: "Realizzato da: Federico Olive - 2025 - 05 - 09"
    },
    pt:
    {
        mainTitle: "Inscrição de Cursos",
        mainSubTitle: "Escolha as matérias que deseja aprender",

        howToStep00: "Passos a Seguir:",
        howToStep01: "Escolha uma ou mais matérias.",
        howToStep02: "Insira seus dados.",
        howToStep99: "Enviar",

        formSubcriptionTitle: "Matérias Disponíveis:",

        formLabelName: "Nome:",
        formNamePlaceholder: "Digite seu nome",

        formLabelEmail: "Email:",
        formEmailPlaceholder: "Digite seu email",

        formLabelPhone: "Telefone:",
        formPhonePlaceholder: "Digite seu telefone",

        formLabelAge: "Idade:",
        formAgePlaceholder: "Digite sua idade",

        formLabelMessage: "Mensagem:",
        formMessagePlaceholder: "Digite sua mensagem",

        cartTitle: "Carrinho:",
        sendForm: "Enviar",

        addCartButton: "Adicionar",
        removeCartButton: "Remover",

        footer: "Feito por: Federico Olive - 2025 - 05 - 09"
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
    currentLang = lang;
    document.documentElement.lang = lang;

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


    const allConfirmbuttons = document.getElementById('catalogContent').querySelectorAll('.confirmbutton');

    allConfirmbuttons.forEach(button =>
    {
        button.textContent = allLang[lang].addCartButton;
    });

    const allRemovebuttons = document.getElementById('cartContent').querySelectorAll('.confirmbutton');
    allRemovebuttons.forEach(button =>
    {
        button.textContent = allLang[lang].removeCartButton;
    });

    const catalogItems = document.querySelectorAll('.catalogItem');
    catalogItems.forEach(catalogItem =>
    {
        const id = catalogItem.dataset.id;
        const articleItem = allCatalogItems.get(parseInt(id));
        const contentItem = catalogItem.querySelector('.contentItem');
        if (contentItem)
        {
            const h2 = contentItem.querySelector('h2 strong');
            h2.textContent = articleItem[lang].title;

            const p = contentItem.querySelector('p');
            p.textContent = articleItem[lang].content;

            const duration = contentItem.querySelector('.duration');
            duration.textContent = articleItem[lang].duration;
        }
    });
}