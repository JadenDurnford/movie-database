async function movieName() {
  var input = document.getElementById("search").value;
  const response = await axios({
    url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${input}`,
    headers: {
      "x-rapidapi-key": "0d58e1013cmshc91fce01de765b2p117970jsn89b74b612fad",
      "x-rapidapi-host":
        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
    },
  });

  document.getElementById("movieName").textContent = response.data.title;
  document.getElementById("moviePoster").src = response.data.poster;
  document.getElementById("separater").textContent = "| ";
  document.getElementById("separater2").textContent = "Length: ";
  document.getElementById("movieYear").textContent = response.data.year;
  document.getElementById("movieLength").textContent = response.data.length;
  document.getElementById("description").textContent = response.data.plot;
  setTimeout(() => {
    document.getElementById("movieLength").scrollIntoView();
  }, 2000);
  console.log(response.data);
}

document.getElementById("button").addEventListener("click", movieName);
document.getElementById("search").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    movieName();
  }
});
