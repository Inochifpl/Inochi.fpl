// Lấy ID sản phẩm từ URL
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  // Lấy container hiển thị các sản phẩm liên quan
  const relatedProductsContainer = document.getElementById(
    "related-products-list"
  );

  // Tìm sản phẩm theo ID từ dữ liệu sản phẩm
  const product = products.find((p) => p.id === productId);

  // Hiển thị chi tiết sản phẩm
  if (product) {
    // Hiển thị thông tin sản phẩm chính
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent =
      product.description;

    const productImage = document.getElementById("product-image");
    productImage.src = product.image; // Gán đường dẫn ảnh
    productImage.alt = product.name; // Gán mô tả cho ảnh

    // Xử lý nếu ảnh lỗi
    productImage.onerror = function () {
      this.src = "assets/default-image.png"; 
    };

    // Hiển thị danh mục
    document.getElementById(
      "product-category"
    ).textContent = `Danh mục: ${product.category}`;
  } else {
    // Thông báo nếu sản phẩm không tồn tại
    document.body.innerHTML = `
            <p class="text-danger text-center mt-5">
                Sản phẩm không tồn tại hoặc đã bị xóa!
            </p>`;
    return;
  }


  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== productId) 
    .slice(0, 4); 

    if (relatedProducts.length > 0) {
        relatedProducts.forEach((related) => {
            const relatedCard = `
                <div class="col-md-3">
                    <div class="card h-100 shadow-sm">
                        <img src="${related.image}" class="card-img-top img-fluid" alt="${related.name}">
                        <div class="card-body text-center">
                            <h6 class="card-title">${related.name}</h6>
                            <p class="text-danger font-weight-bold">${related.price}</p>
                            <a href="product-detail.html?id=${related.id}" class="btn btn-primary mt-2">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            `;
            relatedProductsContainer.insertAdjacentHTML("beforeend", relatedCard);
        });
    } else {
        relatedProductsContainer.innerHTML = `
            <p class="text-muted text-center">Không có sản phẩm liên quan nào.</p>
        `;
    }
    
    
    

  // Dữ liệu chi tiết sản phẩm
  const productDetails = {
    generalInfo: "Xuất xứ: Trung Quốc<br>Năm sản xuất: 2024",
    advantages: "Sợi lông microfiber dày và thấm hút tốt.",
    usage: "Dùng để lau dọn sàn nhà.",
    brandInfo: `
        Inochi là thương hiệu gia dụng cao cấp Việt Nam, được thiết kế và sản xuất theo phong cách và tiêu chuẩn Nhật Bản. 
        100% sản phẩm của Inochi được làm từ chất liệu nhựa nguyên sinh cao cấp theo quy trình chuẩn ISO 9001, không chứa BPA, đạt chứng nhận an toàn của bộ y tế, 
        đảm bảo điều kiện xuất khẩu sang những thị trường khó tính nhất như Mỹ, EU, Nhật Bản.
        <br><br>
        Thương hiệu Inochi được phát triển bởi Công Ty Cổ Phần Tân Phú Việt Nam với hơn 40 năm kinh nghiệm trong ngành sản xuất.
        Các sản phẩm của Inochi rất đa dạng, phục vụ tối đa mọi nhu cầu trong cuộc sống hàng ngày như: kệ nhựa – giỏ nhựa, thùng rác, các loại thau rổ – đồ tiện ích, hộp đựng thực phẩm, 
        móc áo, màng – túi, các sản phẩm cho mẹ và bé, dụng cụ vệ sinh và các loại hộp cơm, cốc giữ nhiệt nhập khẩu trực tiếp từ thương hiệu Asvel – Nhật Bản.
        <br><br>
        Hiện Inochi đã có mặt tại hầu hết hệ thống các siêu thị lớn như Vinmart, Aeon, Lotte… trên toàn quốc và mở rộng nhiều cửa hàng trực tiếp tại các thành phố lớn như Hà Nội, Đà Nẵng, TP Hồ Chí Minh.
    `,
  };

  // Hiển thị thông tin chi tiết sản phẩm
  document.getElementById(
    "product-general-info"
  ).innerHTML = `<strong>Thông tin chung:</strong><br>${productDetails.generalInfo}`;
  document.getElementById(
    "product-advantages"
  ).innerHTML = `<strong>Ưu điểm sản phẩm:</strong><br>${productDetails.advantages}`;
  document.getElementById(
    "product-usage"
  ).innerHTML = `<strong>Hướng dẫn sử dụng:</strong><br>${productDetails.usage}`;
  document.getElementById("brand-details").innerHTML = productDetails.brandInfo;
});
