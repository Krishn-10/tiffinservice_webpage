document.addEventListener('DOMContentLoaded', function() {
    const cartItems = [];
    const cartTotal = document.getElementById('cartTotal');
    const cartItemsList = document.getElementById('cartItems');

    // Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = parseInt(this.getAttribute('data-price'));
            cartItems.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItemsList.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = total;
    }

    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const dish = document.getElementById('dish').value;
        const rating = document.getElementById('rating').value;
        const feedback = document.getElementById('feedback').value;

        if (rating >= 1 && rating <= 5) {
            alert(`Thank you for your feedback on ${dish}!\nRating: ${rating}\nFeedback: ${feedback}`);
            this.reset(); 
        } else {
            alert('Please provide a valid rating (1-5).');
        }
    });
});