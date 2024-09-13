$(document).ready(function () {
    $('#searchButton').on('click', function () {
        $.ajax({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${$('#searchValue').val()}&apiKey=f7895bd6d8194f3eaa150369f65ee22a`
        }).done(function (data) {
            data.results.forEach(recipe => {
                const searchResults = document.querySelector('.searchResults');

                const newItem = document.createElement('div');
                newItem.classList.add('recipe');
                newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
                searchResults.appendChild(newItem);
            });
        });
    });
});
