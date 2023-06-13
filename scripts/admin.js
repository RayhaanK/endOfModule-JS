const addProduct = document.querySelector('#addProduct');
const productTitle = document.querySelector('#title')
const productImage = document.querySelector('#imageLink')
const productDescription = document.querySelector('#description')
const productPrice = document.querySelector('#price')
const productContent = document.querySelector('#content')

let productArray = localStorage.setItem('products', JSON.stringify([
    {
        id: 1,
        title : "Xbox Series X",
        description: "The Most Powerful gaming console yet! It has a sleek and compact design and is the successor to the Xbox One Developed by Microsoft. ",
        content: "The Xbox Series X is powered by a custom AMD Zen 2 processor with eight cores which clocks at 3.8GHz also allowing up to 12 teraflops of graphical processing power. The console also consists of 16GB of GDDR6 RAM with a built-in solid state drive of 1TB capacity allowing for faster load times and transitioning between games. With a system built for 4K gaming and up to 120fps, you would never want to go back to anything less.",
        image: "https://i.postimg.cc/RZtQnHMs/xbox-Series-X-removebg-preview.png",
        date: new Date(),
        amount: "12,999"
    },
    {
        id: 2,
        title : "Xbox Series S",
        description: "The Xbox Series S is a gaming console with a sleek and white design developed by Microsoft alongside the Xbox Series X.",
        content: "The Xbox Series S is smaller, more affordable and great alternative to the Series X. The Xbox Series S is all digital and is powered by a custom AMD Zen 2 processor with eight cores which clocks at a lower speed compared to the Series X. It's architecture allows up to 4 teraflops of graphical performance which still supports features such as ray tracing. The console consists of  10GB of GDDR6 RAM with a built-in solid stae drive of 512GB which allows for faster loading in times. It supports 1440p resolution with a refresh rate of 120fps. With this smaller design and cheaper alternative, you will be surprised with its powerful performance.",
        image:"https://i.postimg.cc/dtjnWdMh/Xbox-Series-S-2.png" ,
        date: new Date(),
        amount: "6,999"
    },
    {
        id: 3,
        title : "Playstation 5",
        description: "The Playstation 5 is a gaming console developed by Sony Interactive Entertainment. It has a sleek and futuristic design with a two tone colour scheme of white and black.",
        content: " It Playstation 5 is powered by a custom AMD Zen 2 processor with eight cores allowing for faster loading in times. The Playstation 5 consists of 16GB of GDDR6 RAM allowing for smooth performance. It also includes an ultra-fast solid-state drive of 825GB. The console supports gaming at up to 4K resolution with a refresh rate of 120 frames per second. With a console that supports a huge library with both multi-platform games and exclusives, the fun will never die out.",
        image: "https://i.postimg.cc/Kc6v9k7h/playstation5-2.png",
        date: new Date(),
        amount: "12,999"
    },
    {
        id: 4,
        title : "Nintendo Switch",
        description: "The Nintendo Switch is a portable gaming console which looks like a tablet developed by Nintendo. ",
        content: "The Nintendo Switch consists of a 6.2-inch touchscreen display with a resolution of 1280x720 pixels. When docked to a TV, it allows for gaming on a biger screen. One of the consoles standout features is its detachable Joy-Con controllers which can be attached to the side of the console for hadheld gaming or used seperately for multiplayer gaming. The Nintendo Switch is powered by a custom NVIDIA Tegra X1 system-on-a-chip which combines a quad-core ARM Cortex-A57 CPU and a 256-core NVIDIA Maxwell GPU. With the console's expandable storage through microSDXC cards, it allows users to install and store more games.",
        image: "https://i.postimg.cc/43YxLz0Z/nintendo-Switch.webp ",
        date: new Date(),
        amount: "7,499"
    },
    {
        id: 5,
        title : "Xbox Wireless Controller",
        description: "The Xbox Wireless Controller, developed by Microsoft, is designed for use with the Xbox gaming consoles. ",
        content: "The new design allows for enhanced comfort. It can be used for PC as well. It supports AA batteries with up to 40 hours of battery life. It is also compatible with any headset that has a 3.5mm audio jack.",
        image: "https://i.postimg.cc/PqCxvZsL/xbox-Wireless-Controller.png",
        date: new Date(),
        amount: "1,636"
    },
    {
        id: 6,
        title : "Sony Playstation 5 Dualsense Edge Wireless Controller ",
        description: "The Dualsense 5,developed by Sony, brings new features and improved comfortablity.  ",
        content: "With the new haptic feedbacks and adaptive triggers and built in microphone, it brings a new immersion for your favourite games. The controller has a built in battery which can last up to 15 hours and can be charged using a USB type-C cable.It is also compatible with any headset that has a 3.5mm audio jack.",
        image:"https://i.postimg.cc/CxL6Vk7P/Dualsense5.webp" ,
        date: new Date(),
        amount: "1,599"
    },
    {
        id: 7,
        title : "Diablo IV",
        description: "Developed and published by Blizzard Entertainment, Diablo IV is the fourth installment in the Diablo franchise. ",
        content: "Diablo IV is an action role-playing game with a dark fantasy setting and addictive gameplay!",
        image:"https://i.postimg.cc/vH5cRmKJ/diabloIV.jpg" ,
        date: new Date(),
        amount: "1,199"
    },
    {
        id: 8,
        title : "Dying Light 2",
        description: "Developed and Techland and published by Techland Publishing, it is the sequel to Dying Light.",
        content: " Dying Light 2 takes place in a post-apocalyptic open-world filled with infected creatures. Aiden Caldwell, the main character, is an infected survivor with exceptional parkour and combat skills which he has use to combat evil.",
        image:"https://i.postimg.cc/d0mwVkFC/dying-Light2.webp" ,
        date: new Date(),
        amount: "1,099"
    },
    {
        id: 9,
        title : "Cyberpunk 2077",
        description: "Developed and published by CD Projekt Red. Cyberpunk 2077 is set in a dystopian future in Night city in the year 2077.",
        content: "The game offers a futuristic open-world environment with advanced technology and a deep narrative-driven experience.",
        image: "https://i.postimg.cc/MHVh2fmn/cyberpunk2077.jpg" ,
        date: new Date(),
        amount: "1,199"
    }
]))

let prod = JSON.parse(localStorage.getItem('products'))
console.log(prod);
function render() {
  Object.keys(prod).forEach((item) => {
      let newName = prod[item]
      let output = document.querySelector('#adminInput')
      output.innerHTML += `
      <tr>
      <th><div class="tableRows">${newName.id}</th></div>
      <td><div class="tableRows">${newName.title}</td></div>
      <td><div class="tableRows"><img
      src="${newName.image}"
      alt="productImage"
      loading="lazy"
    /></div></td>
      <td><div class="tableRows">${newName.description}</td></div>
      <td><div class="tableRows">${newName.date}</td></div>
      <td><div class="tableRows">R${newName.amount}</td></div>
      <td><div class="tableRows"> <button type="button" class="btn1 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Edit Item
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Item</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Title</p>
            <input type="text" id="editTitle">
            <p>Description</p>
            <input type="text" id="editDescription">
            <p>Image Link</p>
            <input type="text" id="editImageLink">
            <p>Price</p>
            <input type="text" id="editPrice">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateProduct">Save changes</button>
          </div>
        </div>
      </div>
    </div><button class="btn1">Delete</button></td></div>
      </tr>    
      `
  })
}

render()


addProduct.addEventListener('click', (event) =>{
    event.preventDefault();
    // if(productTitle.value == ''){
    //     alert('Title needs to be entered!')
    // }
    // if (productDescription.value == '') {
    //     alert("Description needs to be entered!")
    // } 
    // if (productContent.value == '') {
    //   alert("Content needs to be entered!")
    // }
    // if (productImage.value == '')
    //     alert('Image Link is required!')
    //     if (productPrice.value  == '') {
    //       alert('Price needs to be entered!')
    //     }
    //   }

    let newProduct = {
      title : productTitle.value,
      description: productDescription.value,
      content: productContent.value,
      image: productImage.value,
      amount: productPrice.value
    }

    prod.push(newProduct)

    localStorage.setItem('products', JSON.stringify(productArray))

    render()
    console.log(prod);
})

