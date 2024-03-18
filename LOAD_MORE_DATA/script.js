const productContainer = document.querySelector(".products-container");
const load = document.querySelector(".load-more-btn");
let current = 0;
async function fetchProducts(step) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        step === 0 ? 0 : step * 10
      }`,
      {
        method: "GET",
      }
    );

    const images = await response.json();
    if (images && images.products) {
      displayProducts(images.products);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(productList) {
  productList.forEach((element) => {
    const productItem = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const description = document.createElement("p");
    const price = document.createElement("p");

    productTitle.textContent = element.title;
    description.textContent = element.description;
    productThumbnail.src = element.thumbnail;
    price.textContent = element.price;

    productItem.classList.add("item");
    productTitle.classList.add("title");
    productThumbnail.classList.add("thumbnail");
    price.classList.add("price");
    description.classList.add("description");

    productItem.appendChild(productThumbnail);
    productItem.appendChild(price);
    productItem.appendChild(productTitle);
    productItem.appendChild(description);

    productContainer.appendChild(productItem);
  });

  if(productContainer.children.length === 100){
    load.setAttribute("disabled","true")
  }
}

fetchProducts(current);

load.addEventListener("click",() =>{
    fetchProducts(current+=1);
});
