let sortBtn = document.querySelector("#sort");
let output = document.querySelector("#product");
let product = JSON.parse(localStorage.getItem("products"));
console.log(product);

render();

// Sort Button
sortBtn.addEventListener("click", (event) => {
  event.preventDefault();
  product = product.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  });
  render();
});

function render() {
  output.innerHTML = "";
  Object.keys(product).forEach((item) => {
    let newName = product[item];
    output.innerHTML +=
      `
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
            <div class="cardText">
            <p class="card-text">
            "${newName.description}"
            </p>
            </div>
            <div class="modalBtn">
            <button type="button" class="contentBtn" data-bs-toggle="modal" data-bs-target="#exampleModal` +
      newName.id +
      `">
            Content
            </button>
            <div class="modal fade" id="exampleModal` +
      newName.id +
      `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  ${newName.content}
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
                R${newName.amount} 
                </span>
                </p>
                <div class="addCart">
                <button class="cartBtn" onclick="addCheck(` +
      newName.id +
      `)">Add to Cart</button>
                </div>
                </div>
                </div>  
                </div>
                `;
  });
}

render();

function addCheck(id) {
  console.log(id);
  alert(`${id} has been added`);
}
