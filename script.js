const products = {
  phones: [
    {
      name: "Samsung Galaxy S25 Ultra",
      price: "$999",
      desc: "The newest flagship with amazing camera.",
      img: "phones/samsungs25ultra.png"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      price: "$899",
      desc: "Premium flagship phone.",
      img: "phones/samsungs24ultra.png"
    },
    {
      name: "Samsung Galaxy Z Fold 7",
      price: "$1799",
      desc: "Foldable with large screen.",
      img: "phones/samsungzfold7.png"
    },
    {
      name: "Samsung Galaxy Z Fold 6",
      price: "$1699",
      desc: "Innovative foldable technology.",
      img: "phones/samsungzfold6.png"
    },
    {
      name: "Samsung Premium Phone",
      price: "$1199",
      desc: "Latest innovation.",
      img: "oled.png"
    },
    {
      name: "Samsung Mobile Device",
      price: "$599",
      desc: "Reliable and fast.",
      img: "washingmachine.png"
    },
    {
      name: "Samsung Galaxy Series",
      price: "$699",
      desc: "Advanced technology device.",
      img: "samsungwatch.png"
    },
    {
      name: "Samsung Fridge",
      price: "$1499",
      desc: "Smart refrigerator with cooling technology.",
      img: "phones/samsungfridge.png"
    },
    {
      name: "Galaxy Buds Pro",
      price: "$229",
      desc: "Premium wireless earbuds with noise cancellation.",
      img: "phones/galaxybudspro.png"
    }
  ],
  tv: [
    {
      name: "Samsung QLED 65\"",
      price: "$1299",
      desc: "Brilliant colors and clarity.",
      img: "shkolladigjitale.png"
    },
    {
      name: "Samsung Premium TV",
      price: "$1599",
      desc: "Ultra HD with smart features.",
      img: "f5f618507698089806734f1fcfe9e219_628283.png"
    }
  ],
  wearables: [
    {
      name: "Galaxy Watch 7",
      price: "$399",
      desc: "Smart watch with health tracking.",
      img: "logo.png"
    },
    {
      name: "Galaxy Buds Pro",
      price: "$229",
      desc: "Premium wireless earbuds.",
      img: "shkolladigjitale.png"
    }
  ],
  home: [
    {
      name: "Samsung Washing Machine",
      price: "$799",
      desc: "Efficient and silent.",
      img: "f5f618507698089806734f1fcfe9e219_628283.png"
    },
    {
      name: "Samsung Refrigerator",
      price: "$1299",
      desc: "Smart cooling technology.",
      img: "logo.png"
    }
  ]
};

const content = document.getElementById("content");
const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const cat = item.dataset.cat;
    showCategory(cat);
  });
});

function showCategory(cat) {
  content.innerHTML = `<h2>${cat.toUpperCase()}</h2>`;
  products[cat].forEach(p => {
    content.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <strong>${p.price}</strong>
        </div>
      </div>
    `;
  });
}