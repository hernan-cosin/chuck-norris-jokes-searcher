function fetchBySearch(palabra) {
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
      return response.json();
    })
    .then((res) => {
      cloningTemplateSearch(res.result);
    })
    .catch((err) => {
      console.error(err);
    });
}

function fetchRandom() {
  fetch(
    "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
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
      return response.json();
    })
    .then((response) => {
      cloningTemplate(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function handleSubmit(e) {
  e.preventDefault();
  clearJokes();
  const palabraClave = this.buscar.value;
  if (e.submitter.classList.value == "search-button") {
    fetchBySearch(palabraClave);
  } else if (e.submitter.classList.value == "lucky-button") {
    fetchRandom();
  }
}

function cloningTemplate(obj) {
  const resultsContainer = document.querySelector(".results-container");

  const template = document.querySelector("#joke-card");

  var clone = template.content.cloneNode(true);
  const resultLink = clone.querySelector(".result-link");
  resultLink.href = obj.url;
  resultLink.textContent = obj.url;
  const resultInformation = clone.querySelector(".result-information");
  resultInformation.textContent = obj.value;

  resultsContainer.appendChild(clone);
}

function cloningTemplateSearch(collection) {
  const resultsContainer = document.querySelector(".results-container");

  const template = document.querySelector("#joke-card");

  for (const joke of collection) {
    var clone = template.content.cloneNode(true);
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
