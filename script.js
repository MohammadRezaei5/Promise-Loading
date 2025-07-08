const startButton = document.querySelector(".start-button button");
const listItems = document.querySelectorAll("li");
const resultDiv = document.querySelector(".result");
const startButtonContainer = document.querySelector(".start-button");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function activateListItem(item, index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      item.classList.add("active");
      console.log(`Activated item ${index + 1}`);
      resolve();
    }, 500);
  });
}

function refreshPage() {
  window.location.reload();
}

startButton.addEventListener("click", async () => {
  startButton.textContent = "درحال بارگیری ...";
  startButton.disabled = true;
  startButton.style.cursor = "not-allowed";

  for (let i = 0; i < listItems.length; i++) {
    await activateListItem(listItems[i], i);
  }

  await delay(1000);

  startButtonContainer.style.display = "none";
  resultDiv.style.display = "flex";
});

window.refreshPage = refreshPage;
