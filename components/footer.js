function addFooter(el) {
  const componentEl = document.createElement("footer");
  componentEl.classList.add("footer");

  componentEl.innerHTML = `    
  <div class="footer__content">
  <img
    class="footer__logo"
    src="images/09acb7ce0d394b14bdb1f97cc6f64f49(2).png"
    alt=""
  />
  <div class="footer__links">
    <a href="./index.html" class="footer__link footer__link--home">Home</a>
    <a href="./servicios.html" class="footer__link footer__link--services">Servicios</a>
    <a href="./contacto.html" class="footer__link footer__link--contact">Contacto</a>
  </div>
  <div class="footer__network-links">
    <a href="" class="footer__network-link">
      <img src="images/linkedin-svgrepo-com (1) 1.png" alt="" />
    </a>
    <a href="" class="footer__network-link">
      <img src="images/twitter.png" alt="" />
    </a>
    <a href="https://github.com/ivangradenigo04" class="footer__network-link">
      <img src="images/github-svgrepo-com 1.png" alt="" />
    </a>
  </div>
  <div>
    <span>©2023 Iván Gradenigo</span>
  </div>
</div>`;

  el.appendChild(componentEl);
}
