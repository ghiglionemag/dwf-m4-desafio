function headerComponent(el) {
  const componentEl = document.createElement("header");
  componentEl.innerHTML = `  
    <header class="header">
        <div class="header__ventana">
          <button class="header__button-close">X</button>
          <div class="header__ventana-links">
          <a
              href="./index.html"
              class="header__ventana-link" 
              >Home</a
            >
            <a
              href="./servicios.html"
              class="header__ventana-link"
              >Portfolio</a
            >
            <a
              href="./contacto.html"
              class="header__ventana-link"
              >Contactame</a
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
            <a class="header__nav__link home__nav" href="./index.html">Home</a>
          </li>
          <li class="header__nav__item">
            <a class="header__nav__link servicios__nav" href="./servicios.html">Portfolio</a>
          </li>
          <li class="header__nav__item">
            <a class="header__nav__link contacto__nav" href="./contacto.html">Contactame</a>
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

  if (location.pathname.includes("index")) {
    const link = document.querySelector(".home__nav");
    link.classList.add("active");
  } else if (location.pathname.includes("servicios")) {
    const link = document.querySelector(".servicios__nav");
    link.classList.add("active");
  } else {
    const link = document.querySelector(".contacto__nav");
    link.classList.add("active");
  }
}
