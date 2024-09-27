fetch("items.json")
  .then((response) => response.json())
  .then((allData) => {
    const swiper_items_sale = document.getElementById("swiper_items_sale");
    let productsHtml = "";

    allData.forEach((element) => {
      if (element.old_price && element.price) {
        const discount = Math.floor(
          ((element.old_price - element.price) / element.old_price) * 100
        );

        productsHtml += `
          <div class="product swiper-slide">
            <span class="discount">%${discount}</span>

            <div class="icons">
              <span><i onclick="addToCart(${element.id}, this)" class="fa-solid fa-cart-plus"></i></span>
              <span><i class="fa-solid fa-share"></i></span>
              <span><i class="fa-solid fa-heart"></i></span>
            </div>

            <div class="img-product">
              <img src="${element.img}" alt="" />
            </div>

            <h3 class="name">
              <a href="#">${element.name}</a>
            </h3>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>$${element.price}</span></p>
              <p class="old-price">$${element.old_price}</p>
            </div>
          </div>
        `;
      }
    });

    swiper_items_sale.innerHTML = productsHtml;
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
