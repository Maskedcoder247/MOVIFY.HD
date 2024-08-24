const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://imdb-top-100-movies.p.rapidapi.com/");
xhr.setRequestHeader(
  "x-rapidapi-key",
  "c0cb69697emsha4bee4c734dee42p1624eajsndcc47dfb3a76"
);
xhr.setRequestHeader("x-rapidapi-host", "imdb-top-100-movies.p.rapidapi.com");

xhr.send(data);
