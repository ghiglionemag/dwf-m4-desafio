function contactComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `

    <div class="form-container">
    <h2 class="form__title">Escribime</h2>
      <form class="form-content">
      
      <label  for="nombre" name="nombre">
          <h3 class="form__label">Nombre</h3>
          <input class="form__input" type="text" id="nombre"/>
        </label>
        <label  for="email" name="email">
          <h3 class="form__label">Email</h3>
          <input class="form__input" type="text" id="email"/>
        </label>
        <label  for="mensaje" name="mensaje">
          <h3 class="form__label">Mensaje</h3>
          <input class="form__input-text" type="text-area" id="mensaje" />
        </label>
        <div class="form__submit-cont">
          <button class="form__submit-button">Enviar</button>
        </div>
      </form>
      </div>
    `;

  const formEl = componentEl.querySelector(".form-content");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const objeto = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };
    fetch("https://apx-api.vercel.app/api/utils/dwf ", {
      method: "POST",
      body: JSON.stringify({
        to: "ghiglionemag@gmail.com",
        message: objeto.mensaje,
      }),
      headers: { "content-type": "application/json" },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
  });

  el.appendChild(componentEl);
}
