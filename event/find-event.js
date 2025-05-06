document.getElementById('event-search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let categorySearch = document.getElementById('category-search').value.toLowerCase();
    let locationSearch = document.getElementById('location-search').value.toLowerCase();
    let dateSearch = document.getElementById('date-search').value;

    // Get all event cards
    let eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(function(card) {
        let eventCategory = card.getAttribute('data-category');
        let eventDate = card.getAttribute('data-date');
        let cardVisible = true;

        // Filter by category
        if (categorySearch && eventCategory.toLowerCase() !== categorySearch) {
            cardVisible = false;
        }

        // Filter by date
        if (dateSearch && eventDate !== dateSearch) {
            cardVisible = false;
        }

        // Show/Hide based on filters
        if (cardVisible) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Filter button functionality
function filterEvents(filter) {
    let eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(function(card) {
        let eventCategory = card.getAttribute('data-category');
        let eventDate = card.getAttribute('data-date');
        let cardVisible = true;

        if (filter === 'all') {
            cardVisible = true;
        } else if (filter === 'upcoming') {
            let today = new Date().toISOString().split('T')[0];
            if (eventDate <= today) {
                cardVisible = false;
            }
        } else if (filter !== eventCategory) {
            cardVisible = false;
        }

        if (cardVisible) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
