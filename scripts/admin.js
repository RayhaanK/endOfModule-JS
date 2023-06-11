const addProduct = document.querySelector('#addProduct');
const productTitle = document.querySelector('#title')
const productImage = document.querySelector('#imageLink')
const productDescription = document.querySelector('#description')
const productPrice = document.querySelector('#price')

let products = [
    {
        id: 1,
        Title : "Xbox Series X",
        Description: "The Most Powerful gaming console yet! It has a sleek and compact design and is the successor to the Xbox One Developed by Microsoft. It is powered by a custom AMD Zen 2 processor with eight cores which clocks at 3.8GHz also allowing up to 12 teraflops of graphical processing power. The console also consists of 16GB of GDDR6 RAM with a built-in solid state drive of 1TB capacity allowing for faster load times and transitioning between games. With a system built for 4K gaming and up to 120fps, you would never want to go back to anything less.",
        Image: ,
        Date: new Date(),
        Amount: "12,999"
    },
    {
        id: 2,
        Title : "Xbox Series S",
        Description: "The Xbox Series S is a gaming console with a sleek and white design developed by Microsoft alongside the Xbox Series X, it is smaller, more affordable and great alternative to the Series X. This console is all digital and is powered by a custom AMD Zen 2 processor with eight cores which clocks at a lower speed compared to the Series X. It's architecture allows up to 4 teraflops of graphical performance which still supports features such as ray tracing. The console consists of  10GB of GDDR6 RAM with a built-in solid stae drive of 512GB which allows for faster loading in times. It supports 1440p resolution with a refresh rate of 120fps. With this smaller design and cheaper alternative, you will be surprised with its powerful performance",
        Image: ,
        Date: new Date(),
        Amount: "6,999"
    },
    {
        id: 3,
        Title : "Playstation 5",
        Description: "The Playstation 5 is a gaming console developed by Sony Interactive Entertainment. It has a sleek and futuristic design with a two tone colour scheme of white and black. It is powered by a custom AMD Zen 2 processor with eight cores allowing for faster loading in times. The Playstation 5 consists of 16GB of GDDR6 RAM allowing for smooth performance. It also includes an ultra-fast solid-state drive of 825GB. The console supports gaming at up to 4K resolution with a refresh rate of 120 frames per second. With a console that supports a huge library with both multi-platform games and exclusives, the fun will never die out.",
        Image: ,
        Date: new Date(),
        Amount: "12,999"
    },
    {
        id: 4,
        Title : "Nintendo Switch",
        Description: "The Nintendo Switch is a portable gaming console which looks like a tablet developed by Nintendo. This console can be played handheld or as a home console by connected it to the TV. It consists of a 6.2-inch touchscreen display with a resolution of 1280x720 pixels. When docked to a TV, it allows for gaming on a biger screen. One of the consoles standout features is its detachable Joy-Con controllers which can be attached to the side of the console for hadheld gaming or used seperately for multiplayer gaming. The Nintendo Switch is powered by a custom NVIDIA Tegra X1 system-on-a-chip which combines a quad-core ARM Cortex-A57 CPU and a 256-core NVIDIA Maxwell GPU. With the console's expandable storage through microSDXC cards, it allows users to install and store more games.",
        Image: ,
        Date: new Date(),
        Amount: "7,499"
    },
    {
        id: 5,
        Title : "Xbox Wireless Controller",
        Description: "The Xbox Wireless Controller, developed by Microsoft, is designed for use with the Xbox gaming consoles. The new design allows for enhanced comfort. It can be used for PC as well. It supports AA batteries with up to 40 hours of battery life. It is also compatible with any headset that has a 3.5mm audio jack.",
        Image: ,
        Date: new Date(),
        Amount: "1,599"
    },
    {
        id: 6,
        Title : "Sony Playstation 5 Dualsense Edge Wireless Controller ",
        Description: "The Dualsense 5,developed by Sony, brings new features and improved comfortablity. With the new haptic feedbacks and adaptive triggers and built in microphone, it brings a new immersion for your favourite games. The controller has a built in battery which can last up to 15 hours and can be charged using a USB type-C cable.It is also compatible with any headset that has a 3.5mm audio jack.",
        Image: ,
        Date: new Date(),
        Amount: "1,199"
    },
]

​

addProduct.addEventListener('click', (event) =>{
    event.preventDefault();
    if(productTitle.value == ''){
        alert('Input is Empty!')
    } 
    if (productDescription.value == '') {
        alert("Description needs to be entered!")
    }
    if (productImage.value == '') {
        alert('Image Link is required!')
    }
    if (productPrice.value  == '') {
        alert('Price needs to be entered!')
    }
    else {
        products.push({
            name: productTitle.value,
            completed: false,
            date: new Date()
    }) 
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        renderList();
    }
})