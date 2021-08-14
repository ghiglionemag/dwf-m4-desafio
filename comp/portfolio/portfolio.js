function portfolioComponent(el) {
  const componentEl = document.createElement("section");
  componentEl.innerHTML = `
      <section class="portfolio">
      <div class="portfolio__title__container">
      <h2 class="portfolio__title">Portfolio</h2>
      </div>
        <div class="portfolio__container"></div> 
    </section>
    <template id="portfolio__container">
    <div class="portfolio__card">
        <img src="./img/servicios__img.svg" alt="Foto de servicios" class="servicios__img">
        <h3 class="portfolio__subtitle">Un servicio</h3>
        <p class="portfolio__p">algun servicio ejemplo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim obcaecati nemo dolorem excepturi quo, unde architecto voluptatibus! Maxime officiis cumque veritatis, ullam esse nostrum velit. Veritatis dolorem vero quis!</p>
    </div>
    </template>
      `;
  function getServices() {
    return fetch(
      "https://cdn.contentful.com/spaces/s19mfhkp9p7q/environments/master/entries?access_token=dlOCIbgTx7E3HTFmXXiKRwSiiJMQvAjte5Xdn1ulYbM&content_type=portofolio"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fieldsCollections = data.items.map((item) => {
          return {
            title: item.fields.portfolioTitle,
            description: item.fields.portfolioDescription,
          };
        });

        return fieldsCollections;
      });
  }

  function addServiceCard(params = {}) {
    const template = componentEl.querySelector("#portfolio__container");
    const container = componentEl.querySelector(".portfolio__container");

    template.content.querySelector(".portfolio__subtitle").textContent =
      params.title;
    template.content.querySelector(".portfolio__p").textContent =
      params.description;
    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }

  getServices().then(function (services) {
    for (const s of services) {
      addServiceCard(s);
    }
  });
  el.appendChild(componentEl);
}
