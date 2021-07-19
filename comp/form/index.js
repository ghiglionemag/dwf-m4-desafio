function contactComponent(el) {
  const componentEl = document.createElement("section");

  componentEl.innerHTML = `

    <section class="form-container">
      
      <form class="form-content">
      <h2 class="form__title">Escribime</h2>
      <label>
          <h3 class="form__label">Nombre</h3>
          <input class="form__input" type="text" />
        </label>
        <label>
          <h3 class="form__label">Email</h3>
          <input class="form__input" type="text" />
        </label>
        <label>
          <h3 class="form__label">Mensaje</h3>
          <input class="form__input" type="text-area" />
        </label>
        <div class="form__submit-cont">
          <button class="form__submit-button">Enviar</button>
        </div>
      </form>
      </section>
    `;

  const form = componentEl.querySelector(".form-container");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  el.appendChild(componentEl);
}
