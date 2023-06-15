let checkout = JSON.parse(localStorage.getItem("checkout"));
let output = document.querySelector("#checkOutput");
console.log(checkout);


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
            <td><div class="dltBtn"><button class="btn1" id="deleteBtn">Delete</button></td></div></td>
        `;
  });
}
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
  localStorage.setItem("products", JSON.stringify(checkout));
}

render()
