console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const API_KEY = "Nw8eG3P0nmBK2ODO4tuJmnwIK0z7qttG";

let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getGif();
});
function getGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body);
      img.src = body.data.images.original.url;
      img.alt = `${body.data.title} by ${body.data.user.username}`;
      img.title = `${body.data.title} by ${body.data.user.username}`;
    })
    .catch((err) => {
      console.log(err);
    });
}
