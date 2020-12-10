export function searchCharacters(search) {

    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY_3 = "4237669ebd35e8010beee2f55fd45546";

    return fetch(
        `
        https://api.themoviedb.org/3/search/company?api_key=4237669ebd35e8010beee2f55fd45546&query=${search}&page=1`,
        {
            method: 'GET'
        }
    )
        .then(r => r.json())
        .then(r => {
            console.log('query : ', r.results)
            return r.results
        })
        .catch(error => {
            console.error(error);
            return []
        })
}