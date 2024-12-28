function generateGift(event) {
    event.preventDefault();

    let searchElement = document.querySelector("#search");
    searchElement.innerHTML = null;
    new Typewriter("#gift", {
      strings: "Cake",
      autoStart: true,
      delay: 1,
      cursor: "",
    });

}

let giftFormElement = document.querySelector(".gift-generator-form");
giftFormElement.addEventListener("submit", generateGift);