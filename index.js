// function elFetch() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res.value);
//     });
// }

function elFetch(palabra) {
  fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=" +
      palabra,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-rapidapi-key": "968bdcd1f8msh8dce65d1dab0d40p1b4845jsn3688faf1a955",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
      },
    }
  )
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((res) => {
      // console.log(res.result);
      cloningTemplate(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleSubmit(e) {
  e.preventDefault();
  clearJokes();
  const palabraClave = this.buscar.value;
  elFetch(palabraClave);
}

function cloningTemplate(collection) {
  const resultsContainer = document.querySelector(".results-container");

  const template = document.querySelector("#joke-card");

  for (const joke of collection.result) {
    var clone = template.content.cloneNode(true);
    // console.log(joke.url);
    const resultLink = clone.querySelector(".result-link");
    resultLink.href = joke.url;
    resultLink.textContent = joke.url;
    const resultInformation = clone.querySelector(".result-information");
    resultInformation.textContent = joke.value;

    resultsContainer.appendChild(clone);
  }
}

function clearJokes() {
  const resultsContainer = document.querySelector(".results-container");
  resultsContainer.innerHTML = "";
}

function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", handleSubmit);
}

main();
