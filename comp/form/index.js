function contactComponent(el) {

  const componentEl = document.createElement("div");

  componentEl.innerHTML = `

    <div class="form-container">
      <h2 class="form__title">Contactame</h2>
      <form>
        <label>
          <h3 class="form__label">Nombre</h3>
          <input type="text" />
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
      </div>
    `;

  const form = componentEl.querySelector(".form-container");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  el.appendChild(componentEl);
}