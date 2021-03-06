const productos = [
  {
    name: "Burguers",
    products: [
      {
        name: "Veggie Burger",
        description:
          "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        price: 86.29,
        image:
          "https://images.unsplash.com/photo-1543339462-88f4850abc5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1177&q=80",
      },
      {
        name: "Mushroom Burger",
        description:
          "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        price: 21.7,
        image:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/0/FN_Melissa-DArabian-Burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371616351111.jpeg",
      },
      {
        name: "Duck Breast Burger",
        description:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: 56.35,
        image:
          "https://food-images.files.bbci.co.uk/food/recipes/duck_burger_and_chips_40267_16x9.jpg",
      },
      {
        name: "Shrimp Burger",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        price: 68.2,
        image:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Flighten-up-america%2Fshrimp-burger-ck-x.jpg%3Fitok%3Dxa2xhW1p",
      },
      {
        name: "Nori Sea Weed Burger",
        description:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        price: 62.42,
        image:
          "https://images.food52.com/SCUL0-WZvkaPJDxPZouSqMyo_h8=/1200x1200/13ef3271-099a-4464-af59-6949205ebeb2--1_Sushi_burgers_r.jpg",
      },
      {
        name: "Texas Style Burger",
        description:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        price: 55.35,
        image:
          "https://www.goodtaste.tv/wp-content/uploads/2017/07/texas_burger-copy-1.jpg",
      },
      {
        name: "Tuna Burger",
        description:
          "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        price: 36.62,
        image:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/6/18/0/KC2109_Tuna-Steak-Burgers_s4x3.jpg.rend.hgtvcom.826.620.suffix/1560899443986.jpeg",
      },
    ],
  },
  {
    name: "Tacos",
    products: [
      {
        name: "Lamb",
        description: "Fusce consequat. Nulla nisl. Nunc nisl.",
        price: 8.48,
        image:
          "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fspicy-lamb-tacos-su.jpg%3Fitok%3Dt2JxT-nS",
      },
      {
        name: "Beef",
        description:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        price: 45.96,
        image:
          "https://images-gmi-pmc.edge-generalmills.com/287350ad-0c09-4d72-be5b-b7505b2cba80.jpg",
      },
      {
        name: "Mushroom",
        description:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        price: 68.52,
        image:
          "https://www.wellplated.com/wp-content/uploads/2018/12/Vegetarian-Tofu-Mushroom-Tacos.jpg",
      },
      {
        name: "Chinese Lemon Pork",
        description:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        price: 75.96,
        image:
          "https://www.countrycleaver.com/wp-content/uploads/2014/08/IMG_4879.jpg",
      },
      {
        name: "Pork",
        description:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        price: 79.56,
        image:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/23/0/FNmag_Slow-Cooker-Pork-Ta_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382538904130.jpeg",
      },
      {
        name: "Scallops",
        description:
          "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        price: 59.03,
        image:
          "https://s23991.pcdn.co/wp-content/uploads/2013/05/tacos-sea-scallops-fi.jpg",
      },
      {
        name: "Salmon",
        description:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        price: 98.44,
        image:
          "https://healthyfitnessmeals.com/wp-content/uploads/2018/09/Salmon-tacos-with-corn-salsa-7.jpg",
      },
    ],
  },
  {
    name: "Salads",
    products: [
      {
        name: "Fruit Salad Deluxe",
        description:
          "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        price: 3.42,
        image:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg",
      },
      {
        name: "Lettuce and Tomato",
        description:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        price: 90.23,
        image: "https://media.soscuisine.com/images/recettes/large/331.jpg",
      },
      {
        name: "Mushrooms and Honey",
        description:
          "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        price: 10.38,
        image:
          "https://www.thefunguymushrooms.com/wp-content/uploads/2017/12/FunGuys-Spinach-and-Mushroom-Salad-with-Creamy-Honey-Mustard-Dressing.jpg",
      },
      {
        name: "Asparagus and Olives",
        description:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        price: 4.0,
        image:
          "https://www.diabetes.org.uk/resources-s3/migration/recipes/Tomato-Olive-Asparagus-Bean-Salad.jpg",
      },
      {
        name: "Lettuce and Spinach",
        description:
          "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        price: 79.73,
        image:
          "https://www.thespruceeats.com/thmb/kMplatIvbFa-BWa95xQABt4J_cw=/4038x2271/smart/filters:no_upscale()/killed-lettuce-022017-589a1b8c3df78caebc2c3b01.jpg",
      },
      {
        name: "Lobster Tail Salad",
        description:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        price: 47.54,
        image:
          "https://hips.hearstapps.com/hmg-prod/images/delish-lobster-salad-still001-1560188252.jpg",
      },
      {
        name: "Kolrabi Salad",
        description:
          "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        price: 61.5,
        image:
          "https://www.feastingathome.com/wp-content/uploads/2013/07/Kohlrabi-Slaw-Recipe-102.jpg",
      },
    ],
  },
  {
    name: "Desserts",
    products: [
      {
        name: "Ice Cream Bar - Hageen Daz To",
        description:
          "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        price: 24.42,
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/0e/53/d3/b8/millburn-haagen-dazs.jpg",
      },
      {
        name: "Dried Peach and Honey",
        description:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        price: 2.82,
        image:
          "https://envato-shoebox-0.imgix.net/2405/4397-d4c2-4e1c-82a8-4c779014c41a/Summer+dessert-+Cooking+Ripe+grilled+peaches+with+honey-20.JPG?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=88eab7c403e02c7312c68018c57de009",
      },
      {
        name: "Cranberries with Cream",
        description:
          "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        price: 77.65,
        image:
          "https://www.melskitchencafe.com/wp-content/uploads/2013/04/Dip-Dish-jpg.jpg",
      },
      {
        name: "Dragon Fruit Pie",
        description:
          "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        price: 45.56,
        image:
          "https://1.bp.blogspot.com/-oLv9-vC8398/XY9BsMlqXlI/AAAAAAAA3k0/JoYrzA-S6Nk4N2aR0PQlQ5hzCSqYbJ9PgCNcBGAsYHQ/s640/close%2Bslice%2Bdragonfruit%2Bpie.jpg",
      },
      {
        name: "Cookies and Cream",
        description:
          "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        price: 29.43,
        image:
          "https://i.pinimg.com/originals/44/c5/02/44c50249c6dd23480ee1b4831416f7b0.jpg",
      },
      {
        name: "Muffin",
        description:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        price: 73.15,
        image:
          "https://cdn2.cocinadelirante.com/sites/default/files/images/2020/04/muffin-de-chocolate-tipo-costco.jpg",
      },
      {
        name: "Ice Cream - Super Sandwich",
        description:
          "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        price: 7.35,
        image:
          "https://cdn.shopify.com/s/files/1/2087/1621/products/bundle-6pk-vanilla-neo-large-pro.jpg?v=1570207843",
      },
    ],
  },
  {
    name: "Drinks and Sides",
    products: [
      {
        name: "Beer - Guiness",
        description:
          "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        price: 10.08,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/35/Guinness_Glass_2010.jpg",
      },
      {
        name: "Wine - Blue Nun Qualitatswein",
        description:
          "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        price: 91.01,
        image:
          "https://images.squarespace-cdn.com/content/v1/55101debe4b0299913beeae2/1542744428234-930B2TO3L50KPOSJIC6K/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/FullSizeRender.jpeg",
      },
      {
        name: "Beer - Blue",
        description:
          "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        price: 77.09,
        image:
          "https://i.pinimg.com/originals/dd/26/8b/dd268be6c732cc9ce49a8e7ec5082bff.jpg",
      },
      {
        name: "Tea - Herbal I Love Lemon",
        description:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        price: 62.58,
        image:
          "https://cookieandkate.com/images/2019/12/best-ginger-tea-recipe-2.jpg",
      },
      {
        name: "Juice - V8, Tomato",
        description:
          "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        price: 31.41,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81vqKy582fL._SX425_PIbundle-24,TopRight,0,0_AA425SH20_.jpg",
      },
      {
        name: "Beer - Camerons Auburn",
        description: "Fusce consequat. Nulla nisl. Nunc nisl.",
        price: 78.7,
        image: "https://fridaybeer.files.wordpress.com/2011/06/dscf21651.jpg",
      },
      {
        name: "Beer - Camerons Cream Ale",
        description:
          "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        price: 63.07,
        image: "https://fridaybeer.files.wordpress.com/2011/06/dscf21651.jpg",
      },
    ],
  },
];

let menuItems = document.querySelectorAll("nav.menu ul li");
let titulo = document.getElementById("title");
let contenedor = document.querySelector(".card-container");
let active = document.querySelector(".menu-active");
let itemsCarrito = document.getElementById("itemsCarrito");
let carritoBtn = document.getElementById("carrito");
let tabla = document.getElementById("tabla");
let tablaTotal = document.getElementById("total");
let orderDetailEl = document.querySelector(".order-detail");
let cancelOrderBtn = document.querySelector("button.cancel");
let confirmOrderBtn = document.querySelector("button.confirm");
let modalEl = document.querySelector(".modal");
let finalCancelEl = document.querySelector(".cancel-deny");
let finalConfirmEl = document.querySelector(".cancel-confirm");
let menu = document.querySelector("nav.menu");
let menuOpenerSvgs = document.querySelectorAll("nav.menu ul li svg");
let carrito = [];
let agregados = [];
let contador = 0;

menuItems.forEach((element) => {
  element.addEventListener("click", cambiarCategoria);
});
menuOpenerSvgs.forEach((element) => {
  element.addEventListener("click", openMenu);
});
finalCancelEl.addEventListener("click", denyCancel);
finalConfirmEl.addEventListener("click", confirmCancel);
carritoBtn.addEventListener("click", mostrarDetalleOrden);
cancelOrderBtn.addEventListener("click", cancelOrder);
confirmOrderBtn.addEventListener("click", confirmOrder);

function openMenu() {
  menu.classList.add("open");
}

function cambiarCategoria(element) {
  let catpos = 0;
  let categoriaElegida = productos.find(
    (cat) => cat.name.toLowerCase() === element.target.innerText.toLowerCase()
  );
  catpos = productos.indexOf(categoriaElegida);
  limpiar();
  titulo.innerText = categoriaElegida.name;
  menu.classList.remove("open");
  toogleActive(element.target);
  categoriaElegida.products.forEach((el, index) => {
    let divCard = getCard(el, catpos, index);
    contenedor.appendChild(divCard);
  });
}

function getCard(item, catpos, itempos) {
  item.price;
  let cardHtml = `      
    <img
      src="${item.image}"
      alt="${item.name}"
    />
    <h4>${item.name}</h4>
    <p>
      ${item.description}
    </p>
    <p class="price">$${item.price}</p>
    <button onclick="agregarAlCarrito(${catpos}, ${itempos})" class="add-to-cart">Add to cart</button>
  `;

  let div = document.createElement("div");
  div.classList.add("product-card");
  div.innerHTML = cardHtml;
  return div;
}

function limpiar() {
  contenedor.innerHTML = "";
}

function toogleActive(liitem) {
  active.classList.remove("menu-active");
  active = liitem;
  liitem.classList.add("menu-active");

  contenedor.classList.remove("display-none");
  orderDetailEl.classList.add("display-none");
}

function start() {
  titulo.innerText = productos[0].name;

  productos[0].products.forEach((el, index) => {
    let divCard = getCard(el, 0, index);
    contenedor.appendChild(divCard);
  });
}

start();

function aumentarContador() {
  contador++;
  if (contador > 0) {
    itemsCarrito.innerText = `${contador} items`;
  }
}

// order detail

function agregarAlCarrito(catPos, elPos) {
  aumentarContador();
  let item = productos[catPos].products[elPos];
  let strAgregado = "" + catPos + elPos;
  if (agregados.includes(strAgregado)) {
    let i = agregados.indexOf(strAgregado);
    carrito[i].quantity++;
  } else {
    item.quantity = 1;
    carrito.push(item);
    agregados.push(strAgregado);
  }
  pintarDetail();
}

function pintarDetail() {
  tabla.innerHTML = "";
  let total = 0;
  carrito.forEach((el, index) => {
    total += el.price * el.quantity;
    let elementTemplate = `<tr>
  <td class="tindex">${index + 1}</td>
  <td class="tquantity">${el.quantity}</td>
  <td class="tname">${el.name}</td>
  <td class="tprice">${el.price}</td>
  <td class="tprice2">${(
    Math.round(el.price * el.quantity * 100) / 100
  ).toFixed(2)}</td>
  <td class="table-buttons">
    <button class="plus" onclick="aumentarItemCarrito(${index})">+</button>
    <button class="minus" onclick="disminuirItemCarrito(${index})">-</button>
  </td>
</tr>`;

    tabla.innerHTML += elementTemplate;
  });
  tablaTotal.innerText = `Total: $${(Math.round(total * 100) / 100).toFixed(
    2
  )}`;
}

function aumentarItemCarrito(index) {
  aumentarContador();
  carrito[index].quantity++;
  pintarDetail();
}

function disminuirItemCarrito(index) {
  contador--;
  if (contador < 1) {
    itemsCarrito.innerText = "";
  } else {
    itemsCarrito.innerText = `${contador} items`;
  }
  carrito[index].quantity--;
  if (carrito[index].quantity == 0) {
    carrito.splice(index, 1);
    agregados.splice(index, 1);
  }
  pintarDetail();
}

function mostrarDetalleOrden() {
  contenedor.classList.add("display-none");
  orderDetailEl.classList.remove("display-none");
  title.innerText = "Order Detail";
}
function confirmOrder() {
  console.log(
    carrito.map(({ price, description, quantity }, index) => {
      return {
        item: index + 1,
        quantity,
        description,
        unitPrice: price,
      };
    })
  );
}
function cancelOrder() {
  modalEl.classList.remove("display-none");

  let w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 600) {
    // Probably mobile
    orderDetailEl.classList.add("display-none");
    titulo.classList.add("display-none");
    menu.classList.add("display-none");
  }
}

function denyCancel() {
  modalEl.classList.add("display-none");
  let w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 600) {
    // Probably mobile
    orderDetailEl.classList.remove("display-none");
    titulo.classList.remove("display-none");
    menu.classList.remove("display-none");
  }
}
function confirmCancel() {
  modalEl.classList.add("display-none");
  carrito = [];
  agregados = [];
  pintarDetail();
  itemsCarrito.innerText = "";
  let w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 600) {
    // Probably mobile
    orderDetailEl.classList.remove("display-none");
    titulo.classList.remove("display-none");
    menu.classList.remove("display-none");
  }
}
