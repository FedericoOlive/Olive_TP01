function getBasePath()
{
    if (window.location.hostname === "federicoolive.github.io")
        return "/TP01_Olive/";
    return "/";
}

const basePath = getBasePath();
const allCatalogItems = new Map();

document.addEventListener("DOMContentLoaded", () =>
{
    const cart = document.getElementById("cartContent");
    const catalog = document.getElementById("catalogContent");
    const cartItems = new Set();

    fetch(basePath + "Resources/Data/Articles/articlesIndex.json")
        .then(res => res.json())
        .then(folders =>
        {
            cart.innerHTML = "";
            catalog.innerHTML = "";

            folders.forEach(folder =>
            {
                fetch(basePath + "Resources/Data/Articles/" + folder + "/data.json")
                    .then(res => res.json())
                    .then(article =>
                    {
                        const langData = article[currentLang];
                        allCatalogItems.set(article.id, article);

                        const articleItem = document.createElement("article");
                        articleItem.classList.add("catalogItem");
                        articleItem.dataset.id = article.id;

                        articleItem.innerHTML = `
                          <div class="imgItem" style="background-image: url('${basePath}Resources/Data/Articles/${folder}/img.webp');"></div>
                          <div class="contentItem">
                            <h2><strong>${langData.title}</strong></h2>
                            <p>${langData.content}</p>
                            <div class="infoItem">
                              <span class="duration"><i class="far fa-clock"></i> ${langData.duration}</span>
                            </div>
                            <button class="confirmbutton">Confirmar</button>
                          </div>
                        `;

                        const confirmButton = articleItem.querySelector(".confirmbutton");

                        confirmButton.addEventListener("click", () =>
                        {
                            const id = article.id;

                            if (!cartItems.has(id))
                            {
                                cartItems.add(id);

                                confirmButton.textContent = "Quitar";
                                articleItem.style.display = "none"; // NOTE: Oculta del Catálogo

                                const cartArticle = articleItem.cloneNode(true);
                                cartArticle.style.display = "block";

                                const cartButton = cartArticle.querySelector(".confirmbutton");
                                cartButton.textContent = "Quitar";

                                cartButton.addEventListener("click", () =>
                                {
                                    cartItems.delete(id);
                                    cartArticle.remove();
                                    articleItem.style.display = "block"; // NOTE: Muestra en el Catálogo de nuevo
                                    confirmButton.textContent = "Confirmar";
                                });

                                cart.appendChild(cartArticle);
                            }
                            else
                            {
                                console.log("ERROR: El artículo ya estaba en el carrito!");
                            }
                        });

                        insertSorted(catalog, articleItem);
                    })
                    .catch(err => console.error("Error cargando artículo:", err));
            });
        })
        .catch(err => console.error("Error listando carpetas:", err));
});

function insertSorted(cart, newArticle)
{
    const newId = parseInt(newArticle.dataset.id, 10);
    let inserted = false;

    for (const child of cart.children)
    {
        const childId = parseInt(child.dataset.id, 10);

        if (newId < childId)
        {
            cart.insertBefore(newArticle, child);
            inserted = true;
            break;
        }
    }

    if (!inserted)
        cart.appendChild(newArticle);
}