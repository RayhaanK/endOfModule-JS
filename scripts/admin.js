const addProduct = document.querySelector("#addProduct");
const productTitle = document.querySelector("#title");
const productImage = document.querySelector("#imageLink");
const productDescription = document.querySelector("#description");
const productPrice = document.querySelector("#price");
const productContent = document.querySelector("#content");
let deleteBtn;
let sortBtn = document.querySelector("#sort");
let productArray = JSON.parse(localStorage.getItem("products"));
let tempID = productArray[productArray.length - 1]
  ? productArray[productArray.length - 1].id + 1
  : 1;
let prod = JSON.parse(localStorage.getItem("products"));
console.log(prod);
const output = document.querySelector("#adminInput");

render();

// Delete Btn
function deleteButton() {
  deleteBtn = [...document.querySelectorAll("#deleteBtn")];
  deleteBtn.forEach((item) => {
    item.addEventListener("click", deleteProduct);
  });
}

function deleteProduct(event) {
  output.innerHTML = "";
  let startingItem = deleteBtn.indexOf(event.target);
  prod.splice(startingItem, 1);
  localStorage.setItem("products", JSON.stringify(prod));
  render();
}

// Sort Button
sortBtn.addEventListener("click", (event) => {
  event.preventDefault();
  prod = productArray.sort((a, b) => {
    if (a.id > b.id) {
      return -1;
    } else if (b.id > a.id) {
      return -1;
    } else {
      return 0;
    }
  });
  render();
});

function render() {
  output.innerHTML = "";
  prod.forEach((item) => {
    // let item = prod[item];
    output.innerHTML += `
      <tr>
      <th><div class="tableRows">${item.id}</th></div>
      <td><div class="tableRows">${item.title}</td></div>
      <td><div class="tableRows"><img
      src="${item.image}"
      alt="productImage"
      loading="lazy"
    /></div></td>
      <td><div class="tableRows">${item.description}</td></div>
      <td><div class="tableRows">${item.date}</td></div>
      <td><div class="tableRows">R${item.amount}</td></div>
      <td><div class="tableRows"> <button type="button" class="btn1 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal2">
      Edit Item
    </button>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark-subtle">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Item</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Title</p>
            <input type="text" id="editTitle">
            <p>Description</p>
            <input type="text" id="editDescription">
            <p>Content</p>
            <input type="text" id="editContent">
            <p>Image Link</p>
            <input type="text" id="editImageLink">
            <p>Price</p>
            <input type="text" id="editPrice">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn1" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn1" id="updateProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div><button class="btn1" id="deleteBtn">Delete</button></td></div>
      </tr>    
      `;
  });
  localStorage.getItem("products");
  deleteButton();
}

render();

addProduct.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    productTitle.value == "" ||
    productDescription.value == "" ||
    productContent.value == "" ||
    productImage.value == ""
  ) {
    alert("Input needs to be entered!");
  } else {
    let newProduct = {
      id: tempID,
      title: productTitle.value,
      description: productDescription.value,
      content: productContent.value,
      image: productImage.value,
      amount: productPrice.value,
    };

    prod.push(newProduct);
    console.log(prod);
    localStorage.setItem("products", JSON.stringify(prod));
  }
  render();
});
render();
