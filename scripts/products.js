let sortBtn = document.querySelector("#sort");
let output = document.querySelector("#product");
let product = JSON.parse(localStorage.getItem("products"));
// console.log(product);
let checkoutProdList = [];

// render();

// Sort Button
let inAsc = true;
sortBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (inAsc === true) {
    inAsc = false;
    product = product.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    inAsc = true;
    product = product.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      } else if (a.title > b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  render();
});

function render() {
  output.innerHTML = "";
  product.forEach((item, index) => {
    // let newName = product[item];
    // console.log(newName);
    output.innerHTML += `
      <div class="col g-3 mt-4">
      <div class="card bg-dark-subtle">
      <h4 class="text-center prodTitle">${item.title}</h4>
      <div class= "image">
      <img
      src="${item.image}"
      class="card-img-top img-fluid prodImg"
      alt="..."
      />
      </div>
      <div class="card-body">
            <div class="cardText">
            <p class="card-text">
            "${item.description}"
            </p>
            </div>
            <div class="modalBtn">
            <button type="button" class="contentBtn" data-bs-toggle="modal" data-bs-target='#exampleModal${item.id}'>
            Content
            </button>
            <div class="modal fade" id='exampleModal${item.id}' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content bg-dark-subtle">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  ${item.content}
                  </div>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            <div>
                <p class= "amount text-center">
                <span class="boldW">
                R${item.amount} 
                </span>
                </p>
                <div class="addCart">
                <button class="cartBtn" onclick='addCheck(${index})'>Add to Cart</button>
                </div>
                </div>
                </div>  
                </div>
                `;
  });
}
render();

function addCheck(index) {
  checkoutProdList.push(product[index]);
  console.log(product[index]);
  localStorage.setItem("checkout", JSON.stringify(checkoutProdList));
  console.log(checkoutProdList);
}
