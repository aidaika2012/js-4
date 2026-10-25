const container = document.getElementById("img");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
.then(res => res.json())
.then(data =>{
    data.drinks.forEach(el => {
        container.innerHTML += `
        <div>
        ${el.strDrink}
        <img src="${el.strDrinkThumb}">
        </div>
        `
        
    });

});
