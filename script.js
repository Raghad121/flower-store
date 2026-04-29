let products = [
  { 
    id: 1, 
    name: "باقة ورد حمراء", 
    price: 120, 
    category: "roses",
    image: "images/red.jpg"
  },
  { 
    id: 2, 
    name: "باقة ورد بيضاء", 
    price: 150, 
    category: "roses",
    image: "images/white.jpg"
  },
  { 
    id: 3, 
    name: "باقة ورد ملونة", 
    price: 200, 
    category: "roses",
    image: "images/color.jpg"
  },
  { 
    id: 4, 
    name: "باقة ورد صفراء", 
    price: 180, 
    category: "roses",
    image: "images/yellow.jpg"
  },
  { 
    id: 5, 
    name: "تغليف هدية", 
    price: 200, 
    category: "gift",
    image: "images/gift1.jpg"
  }
  ,
  { 
    id: 6, 
    name: "تغليف هدية", 
    price: 250, 
    category: "gift",
    image: "images/gift2.jpg"
  }
];

let cart = [];

function displayProducts(list = products) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price} ريال</p>
        <button onclick="addToCart(${p.id})">إضافة للسلة</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let product = products.find(p => p.id === id);
  cart.push(product);

  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item.name} - ${item.price} ريال
        <button class="delete-btn" onclick="removeFromCart(${index})">🗑️ </button>
      </li>
    `;
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1); // حذف العنصر من السلة

  document.getElementById("cart-count").innerText = cart.length;

  updateCart();
}

function filterProducts() {
  let value = document.getElementById("filter").value;

  if (value === "all") {
    displayProducts();
  } else {
    let filtered = products.filter(p => p.category === value);
    displayProducts(filtered);
  }
}
function goToCheckout() {
  if (cart.length === 0) {
    alert("السلة فارغة 🧺");
    return;
  }

  window.location.href = "checkout.html";
}


function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

displayProducts();