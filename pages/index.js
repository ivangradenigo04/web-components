(function addComponents() {
  const body = document.body;
  addHeader(body);

  const card = document.querySelector("#card-template");
  addCard(card);

  const contactContent = document.querySelector(".contact__content");
  addForm(contactContent);

  addFooter(body);
})();

function addContent(params = {}) {
  const template = document.querySelector("#card-template");
  const contenedor = document.querySelector(".services__content");

  if (params.id == "bienvenida") {
    const title = document.querySelector(".hero__title");
    const secondTitle = document.querySelector(".hero__title--light-blue");
    title.textContent = params.title;
    title.appendChild(secondTitle);
    secondTitle.textContent = params.secondTitle;
  }

  if (params.id == "presentacion") {
    document.querySelector(".about-me__title").textContent = params.title;
    document.querySelector(".about-me__img").src = params.url;
    document.querySelector(".about-me__description").textContent =
      params.description;
  }

  if (params.id == "servicios") {
    template.content.querySelector(".card__title").textContent = params.title;
    template.content.querySelector(".card__img").src = params.url;
    template.content.querySelector(".card__description").textContent =
      params.description;

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
            title: i.fields.title,
            secondTitle: i.fields.secondTitle,
          };
        } else if (id == "presentacion") {
          return {
            id: id,
            title: i.fields.title,
            description: i.fields.description,
            url: "https:" + data.includes.Asset[2].fields.file.url,
          };
        } else if (id == "trabajo") {
          return {
            id: id,
            url: "https:" + data.includes.Asset[1].fields.file.url,
            title: i.fields.title,
            description: i.fields.description,
          };
        } else if (id == "servicios") {
          return {
            id: id,
            url: "https:" + data.includes.Asset[0].fields.file.url,
            title: i.fields.title,
            description: i.fields.description,
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
