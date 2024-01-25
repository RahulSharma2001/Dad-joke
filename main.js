const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

const apiKey = "1iORzPyQ8YOPNVJ4Zx8M/w==mKoJDZeul3nvndKo";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function fet() {
  joke.innerText = "Updating...";
  try {
    let res = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes?limit=1",
      options
    );

    const jasonRespose = await res.json();

    let jk = jasonRespose[0].joke;
    joke.innerText = jk;
    btn.innerText = "GENERATE";
  } catch (e) {
    joke.innerText = e;
  }
}

btn.addEventListener("click", () => {
  btn.innerText = "Generating...";
  fet();
});
