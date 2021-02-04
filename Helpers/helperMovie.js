//Filter Functions
function filterFilmsForImbd(films, imbd) {
    let filmChances = [];
    films.filter(film => {
        if (film.imbdScore >= imbd) {
            filmChances.push(film);
        };
    });
    return filmChances;
};

//Movie Of The Day
function movieOfTheDay(films) {
    let arr = filterFilmsForImbd(films, 7);
    let numberOfFilmChances = arr.length;
    let randomFilmPicker = Math.floor(Math.random() * numberOfFilmChances);
    return arr[randomFilmPicker];//returns object (film object)
};

//Recommended Films
function recommendedMovies(films, imbd) {
    let arr = filterFilmsForImbd(films, imbd);
    let storage = [];
    while(storage.length < 6) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (storage.indexOf(arr[randomIndex]) === -1) {
            storage.push(arr[randomIndex]);
        } 
    }
    return storage;
};


module.exports = {
    movieOfTheDay,
    recommendedMovies
}
