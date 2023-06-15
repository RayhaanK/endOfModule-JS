let checkout = JSON.parse(localStorage.getItem("checkout"));
let output = document.querySelector("#checkOutput");
console.log(checkout);

// Delete Button
function deleteButton() {
  deleteBtn = [...document.querySelectorAll("#deleteBtn")];
  deleteBtn.forEach((item) => {
    item.addEventListener("click", deleteProduct);
  });
}

function deleteProduct(event) {
  output.innerHTML = "";
  let startingItem = deleteBtn.indexOf(event.target);
  checkout.splice(startingItem, 1);
  localStorage.setItem("checkout", JSON.stringify(checkout));
  location.reload();
  render();
}

// output.innerHTML = ""
function render() {
  checkout.forEach((item) => {
    output.innerHTML += `
            <tr>
            <td><div class="tableRows">${item.title}</td></div>
            <td><div class="tableRows"><img
            src="${item.image}"
            alt="productImage"
            loading="lazy"
          /></div></td>
            <td><div class="tableRows">${item.description}</td></div>
            <td><div class="tableRows">R${item.amount}</td></div>
            <td><div class="dltBtn"><button class="btn1" id="deleteBtn">Delete</button></td></div>
        `;
  });
  deleteButton();
}

function addAmount() {
  let sumProducts = document.querySelector("#amountTotal");
  let productTotal = checkout.reduce((item1, item2) => {
    return item1 + item2.amount;
  }, 0);

  sumProducts.innerHTML += `
<td><div class="tableRows">R${productTotal}</td></div>
`;
}
deleteButton();
addAmount();
render();
