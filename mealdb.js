const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText)
    inputField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})"class="col">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
    // console.log(meals)
}
const loadMealDetail = (mealId) => {
    // console.log(mealId)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div);
}