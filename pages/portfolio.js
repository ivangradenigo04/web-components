(function addComponents() {
  const body = document.body;
  addHeader(body);

  const card = document.querySelector("#card-template");
  addCard(card);

  addFooter(body);
})();

function addContent(params = {}) {
  const template = document.querySelector("#card-template");
  const contenedor = document.querySelector(".portfolio__content");

  if (params.id == "bienvenida") {
    const title = document.querySelector(".hero__title");
    const secondTitle = document.querySelector(".hero__title--light-blue");
    title.textContent = params.title;
    title.appendChild(secondTitle);
    secondTitle.textContent = params.secondTitle;
  }

  if (params.id == "trabajo") {
    template.content.querySelector(".card__title").textContent = params.title;
    template.content.querySelector(".card__img").src = params.url;
    template.content.querySelector(".card__description").textContent =
      params.description;
    template.content.querySelector(".card__link").href = params.link;

    var clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function getContentfulData() {
  return fetch(
    "https://cdn.contentful.com/spaces/svcf6bga3kbj/environments/master/entries?access_token=W63xaZelNKWEwYpb7d99LYH9AQoF2cC8OSMvuhzRFR4"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const fieldsColl = data.items.slice(0, 8).map((i) => {
        const id = i.sys.contentType.sys.id;
        if (id == "bienvenida") {
          return {
            id: id,
            title: i.fields.portfolioTitle,
            secondTitle: i.fields.portfolioSecondTitle,
          };
        } else if (id == "trabajo") {
          return {
            id: id,
            url: "https:" + data.includes.Asset[1].fields.file.url,
            title: i.fields.title,
            description: i.fields.description,
            link: i.fields.url,
          };
        }
      });
      return fieldsColl;
    });
}

function main() {
  getContentfulData().then((data) => {
    for (const content of data) {
      addContent(content);
    }
  });
}

main();
