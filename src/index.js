function displayGift(response) {
  new Typewriter("#gift", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.1,
    cursor: "",
  });
}
function generateGift(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search");

  let apiKey = "fb2da4606e22fot4bcd3216b032ab697";
  let context = "You are an AI Gift Assistant that tells short gift ideas. Provide the answer in a HTML format. Example: <p><strong>occassion<strong></p> <p>This is a gift idea</p>. Make sure to follow the user instructions. Sign the gift with gift giving wishes and '<strong>AI Gift Generator<strong>' on separate lines with no padding and on separate lines";

  let prompt = `User Instructions: Generate a gift based on ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  axios.get(apiUrl).then(displayGift);
}

let giftFormElement = document.querySelector(".gift-generator-form");
giftFormElement.addEventListener("submit", generateGift);
