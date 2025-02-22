// Define the products array
const products = [
    {
        name: "Hand painting",
        description: "Description of product 1. Amazing quality, must buy!",
    },
    {
        name: "digital art - minimal",
        description: "Description of product 2. Get it now for an unbeatable price!",
    },
    {
        name: "digital art - detailed",
        description: "Description of product 3. Quality you can trust, available now.",
    },
    {
        name: "canvas",
        description: "Description of product 4. The best in its category!",
    }
];

// Function to generate product HTML and append it to the product-list div
function generateProductList() {
    const productListElement = document.getElementById('product-list');
    
    products.forEach(product => {
        // Create the product container
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        // Create the product content
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="mailto:nishisheeba196@gmail.com?subject=${encodeURIComponent(product.name + ' Purchase')}" class="buy-button">Buy Now</a>
        `;
        
        // Append the product element to the product list
        productListElement.appendChild(productElement);
    });
}

// Call the function to generate the product list when the page loads
if (document.getElementById('product-list')) {
    window.onload = generateProductList;
}