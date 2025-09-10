document.addEventListener("DOMContentLoaded", () =>
{
    fetch("./Resources/Data/Articles/articlesIndex.json")
        .then(res => res.json())
        .then(folders =>
        {
            const cart = document.getElementById("cartContent");
            cart.innerHTML = "";

            const catalog = document.getElementById("catalogContent");
            catalog.innerHTML = "";

            folders.forEach(folder =>
            {
                fetch("./Resources/Data/Articles/" + folder + "/data.json")
                    .then(res => res.json())
                    .then(data =>
                    {
                        const article = data;
                        const langData = article[currentLang];
                        const articleItem = document.createElement("article");
                        articleItem.classList.add("catalogItem");

                        articleItem.innerHTML = `
                          <div class="imgItem" style="background-image: url('./Resources/Data/Articles/${folder}/${article.img}');"></div>
                          <div class="contentItem">
                            <h2><strong>${langData.title}</strong></h2>
                            <p>${langData.content}</p>
                            <div class="infoItem">
                              <span class="duration"><i class="far fa-clock"></i> ${langData.duration}</span>
                            </div>
                            <button class="confirmbutton">Confirmar</button>
                          </div>
                        `;

                        catalog.appendChild(articleItem);
                    })
                    .catch(err => console.error("Error cargando artículo:", err));
            });
        })
        .catch(err => console.error("Error listando carpetas:", err));
});