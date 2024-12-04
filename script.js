const numberOfFilm = +prompt("сколько фильмов вы посмотрели", "");
const personalDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt("один из последних фильмов", ""),
    b = prompt("на сколько оценните его", " "),
    c = prompt("один из последних фильмов", ""),
    d = prompt("на сколько оценните его", " ");

personalDB.movies[a] = b;
personalDB.movies[c] = d;

const body = document.querySelector(".one");
body.insertAdjacentHTML("afterbegin", personalDB.count);
console.log(personalDB);
