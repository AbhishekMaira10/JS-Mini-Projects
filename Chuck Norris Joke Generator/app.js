document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = `http://api.icndb.com/jokes/random/${number}`;

  xhr.open(method, url, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = "";

      if (response.type === "success")
        response.value.forEach((joke) => (output += `<li>${joke.joke}</li>`));
      else output += "<li>SOmething went wrong</li>";

      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault();
}
