function addHeader(el) {
  const componentEl = document.createElement("header");
  componentEl.classList.add("header");

  componentEl.innerHTML = `      
  <div class="header__content">
  <a class="header__logo-link" href="index.html"> 
  <img
    class="header__logo"
    src="images/09acb7ce0d394b14bdb1f97cc6f64f49.png"
    alt=""
  />
  </a>
  <div class="header__mobile-menu">
    <button class="mobile-menu__open-window-button">
      <img
        class="mobile-menu__open-window-img"
        src="images/menu-svgrepo-com 1.png"
        alt=""
      />
    </button>
    <div class="mobile-menu__window">
      <button class="mobile-menu__close-window-button">
        <img src="images/close-svgrepo-com (1) 1.png" alt="" />
      </button>
      <div class="mobile-menu__window-content">
        <a href="./portfolio.html" class="mobile-menu__window-link">Portfolio</a>
        <a href="./servicios.html" class="mobile-menu__window-link">Servicios</a>
        <a href="./contacto.html" class="mobile-menu__window-link">Contacto</a>
      </div>
    </div>
  </div>
  <div class="header__desktop-menu">
    <a class="desktop-menu__link" href="./portfolio.html">Portfolio</a>
    <a class="desktop-menu__link" href="./servicios.html">Servicios</a>
    <a class="desktop-menu__link" href="./contacto.html">Contacto</a>
  </div>
</div>`;

  el.prepend(componentEl);
}

function menuButton() {
  const openButton = document.querySelector(".mobile-menu__open-window-button");
  const closeButton = document.querySelector(
    ".mobile-menu__close-window-button"
  );
  const ventanaEl = document.querySelector(".mobile-menu__window");

  openButton.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  closeButton.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
