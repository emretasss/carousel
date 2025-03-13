(() => {
    // Başlangıç fonksiyonu: jQuery yüklemesi ve diğer işlemlerin tetiklenmesi
    const init = () => {
      let script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
      script.type = "text/javascript";
      script.onload = () => {
        // jQuery başarıyla yüklendi, işlemler başlatılıyor.
        console.log("jQuery başarılı");
        buildHTML();
        buildCSS();
        fetchProducts();
        setEvents();
      };
      script.onerror = () => {
        console.error("jQuery başarısız");
      };
      document.getElementsByTagName("head")[0].appendChild(script);
    };
  
    const buildHTML = () => {
      const productDetail = document.createElement("div");
      productDetail.className = "product-detail";
      document.body.appendChild(productDetail);
  
      const htmlContent = `
        <div class="carousel-container">
          <div class="container">
            <p>You Might Also Like</p>
            <div class="carousel"></div>
            <button class="prev-btn"><span>❮</span></button>
            <button class="next-btn"><span>❯</span></button>
          </div>
        </div>
      `;
  
      $(".product-detail").after(htmlContent);
    };
  
    const buildCSS = () => {
      const cssStyles = `
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
  
        .carousel-container {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            position: relative; 
            font-family: "Open Sans", sans-serif;
            max-width: 100%; 
            overflow: hidden; 
            margin-left: auto; 
            margin-right: auto;
        }
  
        .container {
            background-color: #f0f0f0;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
            position: relative; 
            font-family: "Open Sans", sans-serif;
            max-width: 80%; 
            overflow: hidden; 
            margin-left: auto; 
            margin-right: auto;
        }
  
        .container p {
            color: #29323B;
            font-size: 32px;
            line-height: 43px;
            font-weight: lighter;
            padding: 15px 0;
            margin: 0;
        }
  
        .carousel {
            display: flex;
            overflow: hidden; 
            scroll-snap-type: x mandatory; 
            transition: transform 2s ease;
            scroll-behavior: smooth;
        }
  
        .product-card {
            position: relative;
            flex: 0 0 auto;
            width: calc(100% / 6.5);
            margin-right: 10px;
            scroll-snap-align: start;
            background-color: #fff;
            box-sizing: border-box;
            cursor: pointer;
            padding-bottom: 20px;
            text-align: left;
            display: flex;
            flex-direction: column; 
            justify-content: space-between;
        }
  
        .product-card img {
            max-width: 100%;
            height: auto;
            cursor: pointer;
            display: block;
        }
  
        .product-info {
            width: 100%;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
        }
  
        .product-info h3 {
            font-size: 14px;
            font-weight: 400;
            margin: 0 10px;
            cursor: pointer;
            color: #302E2B;
            padding: 5px 0;
        }
  
        .product-price {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; 
            margin-top: auto; 
        }
  
        .product-price span {
            color: #193db0;
            font-size: 18px;
            display: inline-block;
            line-height: 22px;
            font-weight: bold;
            margin: 10px 10px 15px;
        }
  
        .prev-btn, .next-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: transparent;
            color: #333;
            border: none;
            cursor: pointer;
            font-size: 30px;
            z-index: 1;
        }
  
        .prev-btn {
            left: -5px;
        }
  
        .next-btn {
            right: -5px;
        }
  
        .favorite-btn {
            position: absolute;
            top: 5px; 
            right: 5px; 
            color: grey;
            background-color: #fff;
            border-radius: 20%; 
            border: 1px solid grey;
            cursor: pointer;
            font-size: 20px;
            z-index: 1000;
        }
  
        .favorite-btn.favorited {
            color: #193DB0;
        }
  
        /* 1200px ve altı */
        @media (max-width: 1200px) {
            .product-card {
                width: calc(100% / 5.5); 
            }
  
            .prev-btn, .next-btn {
                font-size: 28px; 
            }
        }
  
        /* 992px ve altı */
        @media (max-width: 992px) {
            .product-card {
                width: calc(100% / 4.5); 
                margin-right: 8px; 
            }
  
            .product-card img {
                height: auto;
            }
  
            .prev-btn, .next-btn {
                font-size: 26px; 
            }
        }
  
        /* 768px ve altı */
        @media (max-width: 768px) {
            .product-card {
                width: calc(100% / 3.5); 
                margin-right: 6px; 
            }
  
            .carousel {
                padding: 10px; 
            }
  
            .prev-btn, .next-btn {
                font-size: 24px;
            }
        }
  
        /* 600px ve altı */
        @media (max-width: 600px) {
            .product-card {
                width: calc(100% / 2.5); 
                margin-right: 5px;
            }
  
            .product-info h3 {
                font-size: 12px; 
            }
  
            .product-price span {
                font-size: 16px; 
            }
  
            .prev-btn, .next-btn {
                font-size: 22px;
            }
        }
  
        /* 480px ve altı */
        @media (max-width: 480px) {
            .product-card {
                width: 100%; 
                margin-right: 0; 
                margin-bottom: 10px; 
            }
  
            .carousel {
                flex-direction: column; 
                align-items: center; 
            }
  
            .product-info h3 {
                font-size: 11px; 
            }
  
            .product-price span {
                font-size: 14px; 
            }
  
            .prev-btn, .next-btn {
                display: none; 
            }
        }
  
        /* 360px ve altı */
        @media (max-width: 360px) {
            .product-card {
                width: 100%; 
                padding: 10px; 
            }
  
            .product-info h3 {
                font-size: 10px; 
            }
  
            .product-price span {
                font-size: 12px; 
            }
        }
      `;
  
      $("<style>")
        .addClass("carousel-style")
        .html(cssStyles)
        .appendTo("head");
    };
  
    // API'den ürün verilerini çekme fonksiyonu
    const fetchProducts = () => {
      const apiUrl = "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json";
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((products) => {
          // Ürünleri localStorage'a kaydediyorum
          if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(products));
          }
          displayProducts(products);
        })
        .catch((error) => {
          console.error("Veri çekme hatası:", error);
        });
    };
  
    // Ürün verilerini DOM'a yerleştirip listeleme
    const displayProducts = (products) => {
      const $carousel = $(".carousel");
  
      products.forEach((product) => {
        const favoriteIds = JSON.parse(localStorage.getItem("favoriteIds")) || [];
        const isFavorited = favoriteIds.includes(product.id)
          ? "favorited"
          : "";
        
        // Ürün kartını oluşturma ve ekleme
        const $productCard = $("<div>")
          .addClass("product-card")
          .attr("data-product-id", product.id)
          .append(
            $("<img>")
              .attr("src", product.img)
              .attr("alt", product.name)
          )
          .append(
            $("<button>")
              .addClass("favorite-btn")
              .addClass(isFavorited)
              .append($("<span>").addClass("fav-icon").text("❤"))
          )
          .append(
            $("<div>")
              .addClass("product-info")
              .append($("<h3>").text(product.name))
          )
          .append(
            $("<div>")
              .addClass("product-price")
              .append($("<span>").text(`${product.price} TL`))
          );
        
        $carousel.append($productCard);
      });
    };
  
    // Ürünü favorilere ekleyip çıkarmak için kullanılan fonksiyon
    const toggleFavorite = (productId, $button) => {
      let favoriteIds = JSON.parse(localStorage.getItem("favoriteIds")) || [];
  
      if (favoriteIds.includes(productId)) {
        favoriteIds = favoriteIds.filter((id) => id !== productId);
        $button.removeClass("favorited");
      } else {
        favoriteIds.push(productId);
        $button.addClass("favorited");
      }
  
      localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
    };
  
    // Carousel kaydırma işlemi
    const slideCarousel = (direction) => {
      const $carousel = $(".carousel");
      const scrollAmount = direction === "left" ? -220 : 220; // Kaydırma mesafesi
      const currentScroll = $carousel.scrollLeft();
      $carousel.animate({ scrollLeft: currentScroll + scrollAmount }, 5);
    };
  
    // LocalStorage'dan ürün bilgilerini çekme
    const getProductById = (productId) => {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      return storedProducts.find((p) => p.id === productId);
    };
  
    const setEvents = () => {
      // Ürün favori ekleme/çıkarma işlemi
      $(".carousel").on("click", ".favorite-btn", function () {
        const $btn = $(this);
        const productId = $btn.closest(".product-card").data("product-id");
  
        if (productId) {
          toggleFavorite(productId, $btn);
        }
      });
  
      // Sol ok tuşu ile kaydırma
      $(document).on("click", ".prev-btn", () => {
        slideCarousel("left");
      });
  
      // Sağ ok tuşu ile kaydırma
      $(document).on("click", ".next-btn", () => {
        slideCarousel("right");
      });
  
      // Ürün kartına tıklandığında ilgili ürünü yeni sekmede açma
      $(document).on("click", ".product-card", function (event) {
        const $target = $(event.target);
  
        if ($target.is(".favorite-btn") || $target.closest(".favorite-btn").length > 0) {
          return;
        }
  
        const productId = $(this).data("product-id");
        const product = getProductById(productId);
        if (product?.url) {
          window.open(product.url, "_blank");
        }
      });
    };
  
    init();
  })();
  