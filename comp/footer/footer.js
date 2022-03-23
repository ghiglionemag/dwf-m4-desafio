function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="footer__content">
  <div class="footer__links">
  <a
    href="https://www.instagram.com/ghiglioneagus/?hl=es-la"
    class="footer__link"
    ><img
      class="footer__icon"
      src="./img/footer__icon-instagram.svg"
      alt="Icono Instagram"
    /></a
  >
  
  <a
    href="https://www.linkedin.com/in/agustina-ghiglione-1737081b4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F%2BvzNNFLQUWG6WT%2BAHW%2Fog%3D%3D"
    class="footer__link"
    ><img
      class="footer__icon"
      src="./img//footer__icon-linkedin.svg"
      alt="Icono linkedIn"
    /></a
  >
 
  <a href="https://github.com/ghiglionemag" class="footer__link"
    ><img
      class="footer__icon"
      src="./img//footer__icon-github.svg"
      alt="Icono GitHub"
    /></a
  >
</div>`;

  el.appendChild(componentEl);
}
