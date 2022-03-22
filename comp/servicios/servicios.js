function serviciosComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="servicios">
  <div class="servicios__container">
       <template id="servicios__container">
           <div class="servicios__card">
   <img src="./img/servicios__img.svg" alt="Foto de servicios" class="servicios__img">
   <h3 class="servicios__subtitle">Un servicio</h3>
   <p class="servicios__p">algun servicio ejemplo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim obcaecati nemo dolorem excepturi quo, unde architecto voluptatibus! Maxime officiis cumque veritatis, ullam esse nostrum velit. Veritatis dolorem vero quis!</p>
           </div>
   
         </template>
   </div>
<section>
      `;
  function getServices() {
    return fetch(
      "https://cdn.contentful.com/spaces/s19mfhkp9p7q/environments/master/entries?access_token=dlOCIbgTx7E3HTFmXXiKRwSiiJMQvAjte5Xdn1ulYbM&content_type=servicios"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const fieldsCollections = data.items.map((item) => {
          return {
            title: item.fields.tituloServicio,
            description: item.fields.descripcionServicio,
          };
        });

        return fieldsCollections;
      });
  }

  function addServiceCard(params = {}) {
    const template = componentEl.querySelector("#servicios__container");
    const container = componentEl.querySelector(".servicios__container");

    template.content.querySelector(".servicios__subtitle").textContent =
      params.title;
    template.content.querySelector(".servicios__p").textContent =
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
