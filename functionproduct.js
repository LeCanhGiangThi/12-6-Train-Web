function generateProductHTML(product) {
  const discount = product.discount ? Math.floor(product.discount * 100) + '%' : '10%';
  const discountedPrice = product.discount ? product.price * (1 - product.discount) : product.price;
  const imageSrc = product.image ? `data:image/${product.image.type};base64,${product.image.data}`: 'sofa.png';
  // const imageSrc = product.image ? `${product.image.src}`: 'sofa.png';

  return `
    <div class="product">
      <div class="product-image">
        <img src="${imageSrc}" alt="${product.name}">
        <br>
        ${discount ? `<span class="discount-badge">${discount}</span>` : ''}
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="short-desc">${product.short_desc}</p>
        <p class="product-tag">${product.tag ? product.tag: ""}</p>
        <div class="product-price">
          <span class="price">${discountedPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          ${product.unit_price ? `<span class="unit-price">/${product.unit_price}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}