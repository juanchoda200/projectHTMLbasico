// Productos
const products = [
    { id: 0, name: "ZIRCONFILL EA 1", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 1, name: "ZIRCONFILL E A3", brand: "Marca 2", price: 200, image: "imageness/endo motor radar marca woodpecker.webp" },
    { id: 2, name: "ZIRCONFILL E A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ZIRCONFILL D BLEACH BM4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ZIRCONFILL D B1 BM4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ZIRCONFILL D A2 BM4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "VITTRA APS UNIQUE 4G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "VISCOSTAT INDISOENSE HEMOST", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "VIRTUAL PUTTY REGULAR O FAST", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "VIRTUAL LIGHT BODY REGULAR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TELIO ONLAY SYRINGE UNIVERSAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "SUTURA MEIYI NAYLON 5/0 CAJA X 125/0NAYLON", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "SCARLER ULTRASONIC D6 LED DT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA/TINTE EMPRESS OCRE X", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA Z350 WD", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA Z350 FILTEK XWB", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA Z350 CT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA Z350 A1 ESMALTE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA Z 350 COLOR A 3.5 BODY", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA VITRA FOTOPOLIMERIZAB", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TRANSBOND XT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-FLOW BULK FILL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM T", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM REFILL B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM REFILL B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM REFILL B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM BULK FIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM BULK FIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM BULK FIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM BLEACH", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM BLEACH", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM B2 DEN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM A3.5 X J", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM A3 X JE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM A2 X JE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N-CERAM A1 X JE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TETRIC N FLOW REFILL A3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TE-ECONOM PLUS B2 JER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TE-ECONOM PLUS A3 JER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TE-ECONOM PLUS A2 JER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA TE-ECONOM PLUS A1 JER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA SMART DW", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA SMART BW", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA SMART B2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA SMART A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA SMART A 3.5", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA BASIC C2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA BASIC B1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA BASIC A4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SPECTRA BASIC A3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SIMILE UNIVERSAL COMPO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SIMILE B2 JERINGA X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SIMILE A3.5 JERINGA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA SIMILE A1 JERUNGA X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA ORTODONCIA FIX MAQUIR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI O43 DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI I", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI B (BLEACH)", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI A3.5", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI A3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA SDI A1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA I REFILL SDI JERINGA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LUNA B2 REFILL SDI JERIN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LLIS EB2 JERINGA X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LLIS EA2 JERINGA X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA LLIS EA1 JERINGA X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA HERCULITE PRECIS A3 ES", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA HERCULITE PRECIS A1 ES", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA HARMONIZE XL ESMALTE J", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA XWE 1X4G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA XWB JERINGA X 4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA WD JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA TRANSPARENTE J", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA BL2 1X4G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA BL1 1X4G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA B2B JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA B1E JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA B1B JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A3E JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A3D JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A3B JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A2E JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A2D 4GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A2B JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A3B JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A1E JERINGA X 4 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A1D JERINGA X 4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A1B 1X4G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A 3.5E", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FORMA A 3.5B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA WAVE SDI A3.5 JER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA WAVE SDI A1 JERIN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA APPLIC FLOW COL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA APPLIC FLOW COL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA APPLIC FLOW COL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA FLUIDA A3 X SDI 1 GRAMO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA ESTHET-X HD (WO) JER *4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA ESTHET X HD WHITE DESP", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA ENA UE3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA ENA IWS 5 GR EHRIWS-MI", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS OPAQUE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS COLOR BLANCO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS BL-L ENAMEL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS BL-L DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS B2 ENAMEL X 3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS B2 DENTINA X 3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A3.5 ENAMEL X", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A3.5 DENTINA X", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A3 ESMALTE (ES", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A3 DENTIN (DEN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A2 ENAMEL X 3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A1 ENAMEL X JE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS A1 DENTIN X JE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA EMPRESS TRANS OPAL IV", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DOTAMED", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DE FOTOCURADO DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DE FOTOCURADO DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DE FOTOCURADO DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DE FOTOCURADO BL ENAM", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA DE FOTOCURADO B 1 4.2 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA COMPOSTA APPLIC EA3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA COMPOSTA APPLIC EA2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA COMPOSTA APPLIC EA1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA BRILLIANT FLOW COLTENE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA BRILLIANT FLOW A3/D3 X J", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA BRILLANT NG ENAMEL A .3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M Z250 FLITEK B2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M UNIVERSAL RESTORATIV", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M P60 B2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M P60 A3 2018DM-000391-R", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 XT B2B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 XT A3.5B X", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 XT A3 X 4 GR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 XT A 2B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 XT WX E", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z350 A1B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z250 C2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z250 B1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z-250 A3.5", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z250 A3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z250 A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK Z250 A1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK ONE BULK FILL RE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK ONE BULK FILL RE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESINA 3M FILTEK ONE BULK FILL RE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "RESIN 74 CAJA POLIMERO+MONOM", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT TETRIC N-CERAM INTRO PACK", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT PULIDO RESINA DIAM X4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT PULIDO CERAMICA DIAMANTA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT DENTURE POLISH HP X8", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "IONOMERO BASE IT X 2 JERINGAS 2GR B", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "EVE BRUSH CEPILLOS PARA PULIR X UN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "DURALPIN PAQ. X 50", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CANULAS MEZCLADORAS X 48 VER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ADHESIVO ZAFIRA 8 ML NEW STET", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ADHESIVO XP BOND DENSTPLY", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ADHESIVO TETRIC N BOND- UNIVER", brand: "Marca 2", price: 200, image: "product2.jpg" },
  ];
    
  // Carrito de compras
  let cart = [];
  
  localStorage.setItem("listProductos", JSON.stringify(products));
  
  // Función para mostrar productos en la página
  function displayProducts() {
    const productContainer = document.querySelector(".product-list");
  
    products.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product", "product-container-2");
      productDiv.setAttribute("id", product.id);
  
      // Muestra la imagen según la propiedad 'image' de cada producto
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Marca: ${product.brand}</p>
        <p>Precio: $${product.price}</p>
        <button class="view-details" data-index="${index}">Ver detalles</button>
      `;
  
      productContainer.appendChild(productDiv);
    });
  }
  
  // Función para actualizar el carrito de compras
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    /*cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));*/
  }
  
  // Manejar clic en "Ver detalles"
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-details")) {
      const index = e.target.getAttribute("data-index");
      showProductDetails(index);
    }
  });
  
  // Función para mostrar detalles de un producto
  function showProductDetails(index) {
    const product = products[index];
  
    // Aquí puedes abrir una nueva página o un modal con los detalles del producto
    // y permitir a los usuarios agregar el producto al carrito desde esa página.
  }
  
  // Manejar comentarios
  
  
  // Función para agregar comentarios
  function addComment(commentText) {
    const commentsList = document.querySelector("#comments ul");
    const newComment = document.createElement("li");
    newComment.innerHTML = `<p>Usuario:</p><p>${commentText}</p>`;
    commentsList.appendChild(newComment);
  }
  
  // Inicialización
  document.addEventListener("DOMContentLoaded", function () {
    // Cargar carrito desde localStorage, si existe
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Mostrar productos en la página
    displayProducts();
  
    // Actualizar el carrito
    updateCart();
  });
  
  // Elementos HTML
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  const searchResults = document.getElementById("search-results");
  
  
  // Función para realizar la búsqueda
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";
  
    if (searchTerm) {
        const matchingProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm)
        });
  
        if (matchingProducts.length > 0) {
            matchingProducts.forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
        }
    } else {
        searchResults.innerHTML = "<p>Ingrese un término de búsqueda.</p>";
    }
  }
  
  // Manejar clic en el botón de búsqueda
  searchButton.addEventListener("click", performSearch);
  
  // Manejar la tecla Enter en el campo de búsqueda
  searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        performSearch();
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".product-container-2").forEach(product=>{
    console.log(product);
    product.addEventListener('click', () => {
      const id = product.getAttribute("id")
      
      const selectedProduct = products.find(x=>x.id==id)
      localStorage.setItem("PRODUCTO_ACTUAL", JSON.stringify(selectedProduct))
      window.location = "./prevencion-diagnostico.html"
    })
  })
  })
  