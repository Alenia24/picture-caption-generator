function displayGift(response) {
  new Typewriter("#gift", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });

  let searchInput = document.querySelector("#search");
  searchInput.value = "";

}
function generateGift(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search");

  let apiKey = "fb2da4606e22fot4bcd3216b032ab697";
  let context =
    "You are an AI Gift Assistant that gives short gift ideas. Provide the answer in a HTML format. Example: <p><strong>occassion<strong></p> <ul><li><p>This is a gift idea</p></li> <li><p>This is a gift idea</p></li> <li><p>This is a gift idea</p><li></ul>. Make sure to follow the user instructions. Add a gift giving celebration wishes. Sign '<strong>AI Gift Generator<strong><br />''.Donot make the wishes have a strong property.";
  let prompt = `User Instructions: Generate three gifts based on ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


  let giftElement = document.querySelector(".gift");
  giftElement.innerHTML = `
  <div class="loading">
    <img src="assets/loading.png" alt="">
  </div>`;

  axios.get(apiUrl).then(displayGift);
}

let giftFormElement = document.querySelector(".gift-generator-form");
giftFormElement.addEventListener("submit", generateGift);
