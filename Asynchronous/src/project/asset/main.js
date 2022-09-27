const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6a2a3566ccmsh56fc8695452bde3p1546d0jsn7ed7ae538471",
    "X-RapidAPI-Host": "dog-api.p.rapidapi.com",
  },
};

fetch("https://dog-api.p.rapidapi.com/image/random", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
