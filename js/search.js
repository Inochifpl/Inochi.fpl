document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const productList = document.getElementById('product-list');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();

        const products = productList.querySelectorAll('.product-card');
        products.forEach(product => {
            const productName = product.querySelector('h6').innerText.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
