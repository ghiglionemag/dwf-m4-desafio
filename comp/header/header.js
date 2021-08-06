function headerComponent(el) {
  const componentEl = document.createElement("header");
  componentEl.innerHTML = `  
    <header class="header">
    <img class="header__logo" src="img/logo.png" alt="Logo agus" />
        <div class="header__ventana">
          <button class="header__button-close">X</button>
          <div class="header__ventana-links">
            <a
              href="./portfolio.html"
              class="header__ventana-link"
              >Portfolio</a
            >
            <a
              href="./servicios.html"
              class="header__ventana-link"
              >Servicios</a
            >
            <a
              href="./contacto.html"
              class="header__ventana-link"
              >Escribime</a
            >
          </div>
        </div>
        <button class="header__button-open">
          <div class="header__hamburguer-line"></div>
          <div class="header__hamburguer-line"></div>
          <div class="header__hamburguer-line"></div>
          </button>
        <div class="header__nav">
          <li class="header__nav__item">
            <a class="header__nav__link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="header__nav__item">
            <a class="header__nav__link" href="./servicios.html">Servicios</a>
          </li>
          <li class="header__nav__item">
            <a class="header__nav__link" href="./contacto.html">Contactame</a>
          </li>
        </div>
      </header>
`;

  el.appendChild(componentEl);

  const botonAbreVentanaEl = document.querySelector(".header__button-open");
  const botonCierraVentanaEl = document.querySelector(".header__button-close");
  const ventanaEl = document.querySelector(".header__ventana");

  botonAbreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
