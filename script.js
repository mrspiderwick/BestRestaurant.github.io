document.addEventListener('DOMContentLoaded', function() {
    const preparingDishesLink = document.querySelector('a[href="#preparing-dishes-menu"]');
    const preparingDishesMenu = document.getElementById('preparing-dishes-menu');

    preparingDishesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Toggle the visibility of the preparing dishes menu
        if (preparingDishesMenu.style.display === 'none' || preparingDishesMenu.style.display === '') {
            preparingDishesMenu.style.display = 'block';
        } else {
            preparingDishesMenu.style.display = 'none';
        }
    });

    const showDrinksButton = document.getElementById('showDrinks');
    const showDessertsButton = document.getElementById('showDesserts');
    const showAppetizersButton = document.getElementById('showAppetizers');

    const drinksSection = document.getElementById('drinks');
    const dessertsSection = document.getElementById('desserts');
    const appetizersSection = document.getElementById('appetizers');

    showDrinksButton.addEventListener('click', function() {
        toggleSectionVisibility(drinksSection);
    });

    showDessertsButton.addEventListener('click', function() {
        toggleSectionVisibility(dessertsSection);
    });

    showAppetizersButton.addEventListener('click', function() {
        toggleSectionVisibility(appetizersSection);
    });

    function toggleSectionVisibility(section) {
        if (section.style.display === 'none' || section.style.display === '') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }
});

