// Dữ liệu sản phẩm
const products = [
    { id: "1", category: "Sản phẩm mới", name: "Bông lau Souji Universal", price: "70,000 đ", description: "Bông lau đa năng Souji.", image: "assets/product/VH-up-web-3-266x266.png" },
    { id: "2", category: "Gia dụng cao cấp", name: "Nồi chống dính Omi Stellar 24 cm", price: "799,000 đ", description: "Nồi chống dính cao cấp.", image: "assets/product/3-4-300x246.jpg" },
    { id: "3", category: "Gia dụng cao cấp", name: "Chảo chống dính Omi Stellar 28 cm", price: "579,000 đ", description: "Chảo chống dính tiện lợi.", image: "assets/product/Quanh.jpg" },
    { id: "4", category: "Đồ điện", name: "Chảo điện", price: "1,200,000 đ", description: "Chảo điện đa năng.", image: "assets/product/Quanh.jpg" },
    { id: "5", category: "Hàng thủy tinh", name: "Bình thủy tinh cao cấp", price: "150,000 đ", description: "Bình thủy tinh chịu nhiệt.", image: "assets/product/3.png" },
    { id: "6", category: "Kệ nhựa - Giỏ nhựa", name: "Kệ nhựa đa năng", price: "120,000 đ", description: "Kệ nhựa tiện lợi cho gia đình.", image: "assets/product/VH-up-web-3-266x266.png" },
    { id: "7", category: "Thùng rác", name: "Thùng rác nhựa thông minh", price: "200,000 đ", description: "Thùng rác tiện lợi cho văn phòng.", image: "assets/product/3-4-300x246.jpg" },
    { id: "8", category: "Mẹ và bé", name: "Bình sữa cho bé", price: "90,000 đ", description: "Bình sữa an toàn cho trẻ.", image: "assets/product/Quanh.jpg" },
    { id: "9", category: "Nồi chảo cao cấp", name: "Bộ nồi chảo Inox", price: "2,000,000 đ", description: "Bộ nồi chảo cao cấp, chống dính.", image: "assets/product/3.png" },
    { id: "10", category: "Giữ nhiệt cao cấp", name: "Bình giữ nhiệt Tritan", price: "300,000 đ", description: "Bình giữ nhiệt tiện lợi, bền bỉ.", image: "assets/product/VH-up-web-3-266x266.png" }
];



for (let i = 11; i <= 50; i++) {
    const sampleProduct = products[i % products.length]; 
    products.push({
        id: i.toString(),
        category: sampleProduct.category,
        name: `${sampleProduct.name} - ${i}`,
        price: sampleProduct.price,
        description: sampleProduct.description,
        image: sampleProduct.image,
    });
}

let productsPerPage = 12;
let currentPage = 1;

const productList = document.getElementById("product-list");
const loadMoreBtn = document.getElementById("load-more-btn");

// Hàm hiển thị sản phẩm
function displayProducts(category = "Tất cả sản phẩm", page = 1) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    const filteredProducts = category === "Tất cả sản phẩm"
        ? products
        : products.filter(product => product.category === category);

    const productsToDisplay = filteredProducts.slice(start, end);

    if (page === 1) productList.innerHTML = ""; 

    if (productsToDisplay.length === 0) {
        productList.innerHTML = "<p>Không có sản phẩm nào được tìm thấy.</p>";
        loadMoreBtn.style.display = "none";
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="col">
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <h6>${product.name}</h6>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary">Xem chi tiết</a>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML("beforeend", productCard);
    });

    if (end >= filteredProducts.length) loadMoreBtn.style.display = "none";
    else loadMoreBtn.style.display = "block";
}

// Xử lý sự kiện "Xem thêm"
loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    displayProducts("Tất cả sản phẩm", currentPage);
});

// Xử lý danh mục sản phẩm
document.querySelectorAll(".sidebar a").forEach(categoryLink => {
    categoryLink.addEventListener("click", event => {
        event.preventDefault();

        const category = categoryLink.textContent.trim();
        currentPage = 1;
        displayProducts(category, 1);
    });
});

// Khởi tạo hiển thị sản phẩm ban đầu
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});
