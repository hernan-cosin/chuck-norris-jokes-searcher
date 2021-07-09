function handleSubmit(e) {
  e.preventDefault();
}

function main() {
  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", handleSubmit);
}

main();
