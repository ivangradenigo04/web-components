function addCard(el) {
  const componentEl = document.createElement("div");
  componentEl.classList.add("card");

  componentEl.innerHTML = `   
  <a class="card__link" href=""> 
  <img
    src=""
    alt=""
    class="card__img"
  />
  <h3 class="card__title"></h3>
  <p class="card__description">
  </p>  
  </a>    
  `;

  el.content.appendChild(componentEl);
}
