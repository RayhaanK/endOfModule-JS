
let product = JSON.parse(localStorage.getItem('products'))
console.log(product);

Object.keys(product).forEach((item) => {
    let newName = product[item]
    let output = document.querySelector('#product')
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
              <p class= "amount text-center">
              R${newName.amount} 
              </p>
              <div class="addCart">
              <button class="cartBtn" onclick="addCheck(`+newName.id+`)">Add to Cart</button>
              </div>
              </div>
              </div>  
              </div>
              `
            })

// const addCart = document.querySelector('#addCartBtn')
// addCart.addEventListener('click', () => {
//     // event.preventDefault();
//     console.log("clicked");
//     alert('Item added To Cart')
// })

function addCheck(id) {
    console.log(id);
    alert(`${id} has been added`)
}
