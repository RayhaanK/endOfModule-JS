const output = document.querySelector('#featPost')

let product = JSON.parse(localStorage.getItem('products'))
console.log(product);

let featuredProducts = (product.slice(0,3));
console.log(featuredProducts);
Object.keys(featuredProducts).forEach((item) => {
    let newName = featuredProducts[item];
    output.innerHTML += `
    <div class="col g-3 mt-4">
    <div class="card bg-dark-subtle">
    <h4 class="text-center prodTitle">${newName.title}</h4>
    <div class= "image">
    <img
    src="${newName.image}"
    class="card-img-top img-fluid prodImg"
    alt="..."
    />
    </div>
    <div class="card-body">
          <p class="card-text">
          "${newName.description}"
          </p>
          </div>
          <div>
              <p class= "amount text-center">
              <span class="boldP">
              R${newName.amount} 
              </span>
              </p>
              <div class="addCart">
              <a href="../HTML/products.html"><button class="cartBtn">Go to Products</button></a>
              </div>
              </div>
              </div>  
              </div>
              `
            })