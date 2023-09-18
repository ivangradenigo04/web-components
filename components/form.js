function addForm(el) {
  const componentEl = document.createElement("form");
  componentEl.classList.add("form");

  componentEl.innerHTML = `     
  <label class="form__label">
    <span>Nombre</span>
    <input
      class="form__input"
      name="nombre"
      type="text"
      placeholder="Tu nombre"
    />
  </label>
  <label class="form__label">
    <span>Email</span>
    <input
      class="form__input"
      name="email"
      type="text"
      placeholder="tu@gmail.com"
    />
  </label>
  <label class="form__label form__label--textarea">
    <span>Mensaje</span>
    <textarea
      class="form__textarea"
      name="mensaje"
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </label>
  <div>
    <button class="form__submit">Enviar</button>
  </div>
  `;

  el.appendChild(componentEl);
}

function submitForm() {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objectInputs = Object.fromEntries(formData.entries());
    const data = {
      to: "ivigradenigo@gmail.com",
      message: `Name: ${objectInputs.nombre}, Email: ${objectInputs.email}, Message: ${objectInputs.mensaje}`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("El mensaje se envio correctamente", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    form.reset();
  });
}
