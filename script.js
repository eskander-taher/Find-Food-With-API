const list = document.getElementById('list')
const select = document.getElementById('select');

select.addEventListener('change', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${select.value}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `<div class="item"><h2>${meal.strMeal}</h2><img src="${meal.strMealThumb}" alt=""></div>`
                });
            } else {
                html = `<h3 id="notFound">Sorry, we didn't find any meal!</h3>`;
            }
            list.innerHTML = html;
        });
})