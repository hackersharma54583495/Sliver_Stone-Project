function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Autocomplete functionality for US stock symbols
const stockSymbols = [
     "Apple", "Mircosoft ", "Google", "Amazon", "Facebook", "Tesla", "American Exprees ", "Intel", "Dow Jones", "WallMart",
    // Add more symbols as needed
];

document.getElementById('stockSearch').addEventListener('input', function() {
    const query = this.value.toUpperCase();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';

    if (query) {
        const filteredSymbols = stockSymbols.filter(symbol => symbol.startsWith(query));
        filteredSymbols.forEach(symbol => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = symbol;
            suggestionItem.addEventListener('click', function() {
                document.getElementById('stockSearch').value = symbol;
                suggestions.innerHTML = '';
            });
            suggestions.appendChild(suggestionItem);
        });
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
});

    // "Apple", "Mircosoft ", "Google", "Amazon", "Facebook", "Tesla", "American Exprees ", "Intel", "Dow Jones", "WallMart",

    // Add more symbols as needed



    // Add more symbols as needed

