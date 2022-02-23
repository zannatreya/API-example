const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    // console.log(country);
    const divContainer = document.getElementById('countries');
    counties.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>`;
        divContainer.appendChild(div);
    });
}
const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]));
}
const displayCountryDetails = (country) => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML =
        `<h4>${country.name.common}</h4>
    <p>population:${country.population}</p>
    <img width = "200px" src="${country.flags}"`;
}