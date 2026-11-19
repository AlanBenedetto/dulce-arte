// CONFIGURACIÓN: agregá el WhatsApp comercial en formato internacional, sin + ni espacios.
// Ejemplo de formato argentino: 549XXXXXXXXXX
const WHATSAPP = "5492364326772";

// Galería ilustrativa generada con IA. Confirmar productos antes de ofrecerlos.
const products = [
  {
    "name": "Chocotorta",
    "category": "tortas",
    "description": "La favorita de las reuniones donde siempre queda lugar para algo dulce.",
    "image": "imagenes/03-propuestas-ia-no-publicar/tortas/chocotorta.webp",
    "price": null
  },
  {
    "name": "Torta de chocolate",
    "category": "tortas",
    "description": "Para los que creen que un buen momento siempre puede ser todavía más dulce.",
    "image": "imagenes/03-propuestas-ia-no-publicar/tortas/torta-chocolate.webp",
    "price": null
  },
  {
    "name": "Chocoflan 26 cm",
    "category": "tortas",
    "description": "Una combinación irresistible de chocolate y flan para compartir.",
    "image": "imagenes/catalogo-v9-4/chocoflan.webp",
    "price": 20000
  },
  {
    "name": "Tortas materas",
    "category": "tortas",
    "description": "Elegí tu sabor favorito para acompañar el mate o el café.",
    "image": "imagenes/catalogo-v9-4/matera-chips.webp",
    "price": null,
    "variants": [
      {
        "label": "Chips de chocolate",
        "price": 10000,
        "image": "imagenes/catalogo-v9-4/matera-chips.webp"
      },
      {
        "label": "Chocolate",
        "price": 10000,
        "image": "imagenes/catalogo-v9-4/matera-chocolate.webp"
      },
      {
        "label": "Naranja",
        "price": 9000,
        "image": "imagenes/catalogo-v9-4/matera-naranja.webp"
      },
      {
        "label": "Limón",
        "price": 9000,
        "image": "imagenes/catalogo-v9-4/matera-limon.webp"
      }
    ]
  },
  {
    "name": "Budines clásicos",
    "category": "budines",
    "description": "Un sabor casero para acompañar tus mejores pausas.",
    "image": "imagenes/catalogo-v9-4/budin-marmolado.webp",
    "price": null,
    "variants": [
      {
        "label": "Marmolado (limón y chocolate)",
        "price": 8000,
        "image": "imagenes/catalogo-v9-4/budin-marmolado.webp"
      },
      {
        "label": "Chocolate",
        "price": 8000,
        "image": "imagenes/catalogo-v9-4/budin-chocolate.webp"
      },
      {
        "label": "Chips de chocolate",
        "price": 8000,
        "image": "imagenes/03-propuestas-ia-no-publicar/budines/budin-chips.webp"
      },
      {
        "label": "Naranja",
        "price": 7500,
        "image": "imagenes/catalogo-v9-4/budin-naranja.webp"
      },
      {
        "label": "Limón",
        "price": 7500,
        "image": "imagenes/03-propuestas-ia-no-publicar/budines/budin-limon.webp"
      },
      {
        "label": "Vainilla",
        "price": 7000,
        "image": "imagenes/catalogo-v9-4/budin-vainilla.webp"
      }
    ]
  },
  {
    "name": "Budín de pan",
    "category": "budines",
    "description": "El clásico de siempre, con o sin pasas.",
    "image": "imagenes/catalogo-v9-4/budin-pan.webp",
    "price": null,
    "variants": [
      {
        "label": "Clásico",
        "price": 5500,
        "image": "imagenes/catalogo-v9-4/budin-pan.webp"
      },
      {
        "label": "Con pasas de uva",
        "price": 6500,
        "image": "imagenes/catalogo-v9-4/budin-pan.webp"
      }
    ]
  },
  {
    "name": "Pastafrola",
    "category": "otros",
    "description": "Elegí tu relleno favorito y el tamaño ideal para compartir.",
    "image": "imagenes/03-propuestas-ia-no-publicar/pastafrolas/pastafrola.webp",
    "price": null,
    "variants": [
      {
        "label": "Membrillo · 12 cm",
        "price": 2700,
        "image": "imagenes/catalogo-v9-4/pastafrola-mini.webp"
      },
      {
        "label": "Membrillo · 30 cm",
        "price": 17000,
        "image": "imagenes/03-propuestas-ia-no-publicar/pastafrolas/pastafrola.webp"
      },
      {
        "label": "Batata · 12 cm",
        "price": 2700,
        "image": "imagenes/catalogo-v9-4/pastafrola-mini.webp"
      },
      {
        "label": "Batata · 30 cm",
        "price": 17000,
        "image": "imagenes/catalogo-v9-4/pastafrola-batata.webp"
      },
      {
        "label": "Dulce de leche · 12 cm",
        "price": 2700,
        "image": "imagenes/catalogo-v9-4/pastafrola-mini.webp"
      },
      {
        "label": "Dulce de leche · 30 cm",
        "price": 17000,
        "image": "imagenes/catalogo-v9-4/pastafrola-dulce.webp"
      }
    ]
  },
  {
    "name": "Lemon pie",
    "category": "otros",
    "description": "Un equilibrio fresco y dulce, con merengue irresistible.",
    "image": "imagenes/03-propuestas-ia-no-publicar/tartas/lemon-pie.webp",
    "price": null,
    "variants": [
      {
        "label": "12 cm",
        "price": 6500,
        "image": "imagenes/catalogo-v9-4/lemon-mini.webp"
      },
      {
        "label": "30 cm",
        "price": 30000,
        "image": "imagenes/03-propuestas-ia-no-publicar/tartas/lemon-pie.webp"
      }
    ]
  },
  {
    "name": "Vasito de lemon pie",
    "category": "otros",
    "description": "Un pequeño gusto fresco, ideal para cualquier momento.",
    "image": "imagenes/catalogo-v9-4/lemon-vasito.webp",
    "price": 4000
  },
  {
    "name": "Cupcakes surtidos",
    "category": "otros",
    "description": "Pequeños bocados de alegría que llenan de color cualquier celebración.",
    "image": "imagenes/03-propuestas-ia-no-publicar/cupcakes/cupcakes-surtidos.webp",
    "price": null,
    "variants": [
      {
        "label": "Vainilla",
        "price": null,
        "image": "imagenes/catalogo-v9-4/cupcake-vainilla.webp"
      },
      {
        "label": "Chocolate",
        "price": null,
        "image": "imagenes/catalogo-v9-4/cupcake-chocolate.webp"
      },
      {
        "label": "Frutilla",
        "price": null,
        "image": "imagenes/catalogo-v9-4/cupcake-frutilla.webp"
      },
      {
        "label": "Surtidos",
        "price": null,
        "image": "imagenes/03-propuestas-ia-no-publicar/cupcakes/cupcakes-surtidos.webp"
      }
    ]
  },
  {
    "name": "Brownies",
    "category": "otros",
    "description": "Un antojo intenso y reconfortante para esos momentos en los que querés darte un gusto.",
    "image": "imagenes/03-propuestas-ia-no-publicar/otros/brownies.webp",
    "price": null
  }
];

const CART_KEY = "dulceArteV5Cart";
const IG = "https://www.instagram.com/dulce.arte.76/";
const byId = id => document.getElementById(id);
const money = value => value == null ? "Valor a confirmar" : "$" + value.toLocaleString("es-AR");
const variantName = (product, variant) => `${product.name} — ${variant.label}`;
const catalog = new Map();
for (const p of products) {
  if (p.variants) for (const variant of p.variants) catalog.set(variantName(p, variant), { ...p, ...variant, name: variantName(p, variant), image: variant.image || p.image });
  else catalog.set(p.name, p);
}
const validNames = new Set(catalog.keys());
const getProduct = name => catalog.get(name) || null;
const getPrice = name => getProduct(name)?.price ?? null;
let cart = {};
try {
  const saved = JSON.parse(localStorage.getItem(CART_KEY) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    for (const [name, qty] of Object.entries(saved)) {
      if (validNames.has(name) && Number.isInteger(qty) && qty > 0 && qty <= 99) cart[name] = qty;
    }
  }
} catch (_) { cart = {}; }
function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (_) {}
  document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = Object.values(cart).reduce((a,b)=>a+b,0));
  renderCart();
}
let cartFeedbackTimer;
function showCartFeedback() {
  const feedback = byId("cart-added-feedback");
  if (!feedback) return;
  feedback.hidden = false;
  clearTimeout(cartFeedbackTimer);
  cartFeedbackTimer = setTimeout(() => { feedback.hidden = true; }, 2200);
}
function addToCart(name) {
  cart[name] = Math.min(99, (cart[name] || 0) + 1);
  saveCart();
  showCartFeedback();
}
function renderProducts(category = "todos") {
  const container = byId("products");
  container.replaceChildren();
  products.filter(p => category === "todos" || p.category === category || (category === "pastafrolas" && p.name === "Pastafrola") || (category === "lemon" && /lemon pie/i.test(p.name))).forEach(product => {
    const card = document.createElement("article"); card.className = "product";
    const img = product.image ? document.createElement("img") : document.createElement("div");
    if (product.image) { img.src = product.image; img.alt = product.name; img.loading = "lazy"; }
    else { img.className = "product-placeholder"; img.textContent = product.name; }
    const content = document.createElement("div"); content.className = "product-content";
    const title = document.createElement("h3");
    const price = document.createElement("p"); price.className = "product-price"; price.textContent = product.variants ? (product.variants.every(v => v.price == null) ? "Valor a confirmar" : `Desde ${money(Math.min(...product.variants.filter(v => v.price != null).map(v => v.price)))}`) : money(product.price);
    const button = document.createElement("button"); button.type = "button"; button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => product.variants ? openDetail(product) : addToCart(product.name));
    const titleButton = document.createElement("button");
    titleButton.type = "button";
    titleButton.className = "product-title-link";
    titleButton.textContent = product.name;
    titleButton.setAttribute("aria-label", "Abrir ficha de " + product.name);
    titleButton.addEventListener("click", () => openDetail(product));
    title.append(titleButton);
    img.classList.add("product-preview"); img.tabIndex = 0; img.setAttribute("role", "button");
    img.setAttribute("aria-label", "Ver detalles de " + product.name);
    img.addEventListener("click", () => openDetail(product));
    img.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDetail(product); } });
    content.append(title, price, button); card.append(img, content); container.append(card);
  });
}
function renderCart() {
  const container = byId("cart-items"); container.replaceChildren();
  const names = Object.keys(cart);
  if (!names.length) {
    const p = document.createElement("p"); p.className = "cart-empty";
    p.textContent = "Tu carrito está vacío. Elegí productos del catálogo para empezar.";
    container.append(p);
  }
  names.forEach(name => {
    const product = getProduct(name);
    const row = document.createElement("div"); row.className = "cart-item";
    const img = product.image ? document.createElement("img") : document.createElement("div");
    if (product.image) { img.src = product.image; img.alt = ""; img.loading = "lazy"; } else { img.textContent = "♡"; }
    img.className = "cart-thumb";
    const info = document.createElement("div"); info.className = "cart-product-info";
    const title = document.createElement("strong"); title.textContent = name;
    const unitPrice = document.createElement("span"); unitPrice.className = "cart-line-price"; unitPrice.textContent = getPrice(name) == null ? "Valor a confirmar" : `${money(getPrice(name))} c/u · ${money(getPrice(name) * cart[name])}`;
    const controls = document.createElement("div"); controls.className = "quantity-controls";
    const minus = document.createElement("button"); minus.type = "button"; minus.textContent = "−"; minus.setAttribute("aria-label", "Restar una unidad de " + name);
    minus.addEventListener("click", () => { if (cart[name] <= 1) delete cart[name]; else cart[name]--; saveCart(); });
    const qty = document.createElement("span"); qty.textContent = cart[name]; qty.setAttribute("aria-label", cart[name] + " unidades");
    const plus = document.createElement("button"); plus.type = "button"; plus.textContent = "+"; plus.disabled = cart[name] >= 99; plus.setAttribute("aria-label", "Sumar una unidad de " + name);
    plus.addEventListener("click", () => { cart[name] = Math.min(99, cart[name] + 1); saveCart(); });
    const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "Eliminar"; remove.className = "remove-item";
    remove.setAttribute("aria-label", "Eliminar " + name + " del carrito");
    remove.addEventListener("click", () => { delete cart[name]; saveCart(); });
    controls.append(minus, qty, plus, remove); info.append(title, unitPrice, controls); row.append(img, info); container.append(row);
  });
  const count = Object.values(cart).reduce((sum, n) => sum + n, 0);
  const total = names.reduce((sum, name) => sum + (getPrice(name) || 0) * cart[name], 0);
  const pending = names.some(name => getPrice(name) == null);
  byId("cart-summary").textContent = count ? `${names.length} producto(s) · ${count} unidad(es) · ${pending ? "Subtotal de productos con precio: " : "Total: "}${money(total)}${pending ? " · Hay precios a confirmar" : ""}` : "Sin productos seleccionados";
  byId("send-inquiry").disabled = names.length === 0 || !byId("order-confirm").checked;
}

let selectedVariant = null;
function showDetailProduct(product) {
  detailProduct = product;
  const options = byId("detail-variants"); options.replaceChildren();
  selectedVariant = product.variants?.[0] || null;
  const refresh = () => {
    const current = selectedVariant || product;
    const image = current.image || product.image;
    byId("detail-image").hidden = !image;
    byId("detail-placeholder").hidden = !!image;
    byId("detail-placeholder").textContent = product.name;
    if (image) { byId("detail-image").src = image; byId("detail-image").alt = product.name + (selectedVariant ? " " + selectedVariant.label : ""); }
    byId("detail-price").textContent = money(current.price);
  };
  byId("detail-title").textContent = product.name;
  byId("detail-description").textContent = product.description;
  options.hidden = !product.variants;
  if (product.variants) {
    const label = document.createElement("span"); label.className = "variant-label"; label.textContent = "Elegí tu variedad";
    const choices = document.createElement("div"); choices.className = "variant-choices cupcake-choices";
    product.variants.forEach((variant, index) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "cupcake-flavor";
      button.textContent = `${variant.label} · ${money(variant.price)}`;
      button.classList.toggle("selected", index === 0); button.setAttribute("aria-pressed", String(index === 0));
      button.addEventListener("click", () => {
        selectedVariant = variant;
        choices.querySelectorAll("button").forEach(b => { const active = b === button; b.classList.toggle("selected", active); b.setAttribute("aria-pressed", String(active)); });
        refresh();
      });
      choices.append(button);
    });
    options.append(label, choices);
  }
  refresh();
}
let detailFocus = null;
let detailProduct = null;
function openDetail(product) {
  detailFocus = document.activeElement;
  showDetailProduct(product);
  byId("detail-scroll").scrollTop = 0;
  byId("detail-overlay").hidden = false;
  byId("detail-modal").hidden = false;
  byId("detail-modal").setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  byId("close-detail").focus();
}
function closeDetail(restoreFocus = true) {
  byId("detail-overlay").hidden = true;
  byId("detail-modal").hidden = true;
  byId("detail-modal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");
  if (restoreFocus && detailFocus && detailFocus.isConnected) detailFocus.focus();
  detailProduct = null;
}
byId("close-detail").addEventListener("click", () => closeDetail());
byId("detail-overlay").addEventListener("click", () => closeDetail());
byId("detail-add").addEventListener("click", () => {
  if (!detailProduct) return;
  const name = selectedVariant ? variantName(detailProduct, selectedVariant) : detailProduct.name;
  closeDetail(false);
  addToCart(name);
});
let previousFocus = null;
function openCart() {
  previousFocus=document.activeElement;
  byId("cart-overlay").hidden=false;byId("cart-panel").hidden=false;
  byId("cart-panel").setAttribute("aria-hidden","false");
  document.body.classList.add("cart-open");byId("close-cart").focus();
}
function closeCart() {
  byId("cart-overlay").hidden=true;byId("cart-panel").hidden=true;
  byId("cart-panel").setAttribute("aria-hidden","true");
  document.body.classList.remove("cart-open");
  if(previousFocus && previousFocus.isConnected)previousFocus.focus();
}
function buildMessage() {
  const lines = ["¡Hola, Dulce Arte! 💜", "", "Quiero realizar el siguiente pedido:", "", "🛒 Mi pedido"];
  for (const [name, qty] of Object.entries(cart)) { const price = getPrice(name); lines.push(`• ${qty} × ${name}${price == null ? " — valor a confirmar" : ` — ${money(price * qty)}`}`); }
  const total = Object.entries(cart).reduce((sum,[name,qty]) => sum + (getPrice(name) || 0) * qty, 0);
  const pending = Object.keys(cart).some(name => getPrice(name) == null);
  lines.push("", `${pending ? "Subtotal de productos con precio" : "Total"}: ${money(total)}`);
  if (pending) lines.push("Hay productos con valor pendiente de confirmación.");
  const name = byId("client-name").value.trim();
  const date = byId("requested-date").value;
  const notes = byId("cart-notes").value.trim();
  if (name) lines.push("", "👤 Nombre: " + name);
  if (date) lines.push("📅 Fecha de entrega deseada: " + date.split("-").reverse().join("/"));
  if (notes) lines.push("📝 Observaciones: " + notes);
  lines.push("", "¡Muchas gracias! 💜");
  return lines.join("\n");
}
function sendOrder() {
  if (!Object.keys(cart).length || !byId("order-confirm").checked) return;
  const date = byId("requested-date").value;
  if (date && date < new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0,10)) {
    byId("cart-feedback").textContent = "Elegí una fecha de hoy en adelante.";
    byId("requested-date").focus(); return;
  }
  byId("cart-feedback").textContent = "WhatsApp se abrirá con tu pedido listo para enviar. El pedido queda pendiente de confirmación.";
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer");
}

document.querySelectorAll("[data-open-cart]").forEach(b=>b.addEventListener("click",openCart));
byId("close-cart").addEventListener("click",closeCart);
byId("cart-overlay").addEventListener("click",closeCart);
document.addEventListener("keydown",e=>{
 if(e.key==="Escape" && !byId("detail-modal").hidden){closeDetail();return;}
 if(e.key==="Escape" && !byId("cart-panel").hidden)closeCart();
 if(e.key==="Tab" && !byId("detail-modal").hidden){
   const focusable=[...byId("detail-modal").querySelectorAll('button:not(:disabled)')];
   const first=focusable[0],last=focusable[focusable.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   return;
 }
 if(e.key==="Tab" && !byId("cart-panel").hidden){
   const focusable=[...byId("cart-panel").querySelectorAll('button:not(:disabled),input,textarea')];
   const first=focusable[0],last=focusable[focusable.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
byId("send-inquiry").addEventListener("click",sendOrder);
byId("order-confirm").addEventListener("change",renderCart);
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
 document.querySelectorAll(".filter").forEach(b=>{const active=b===button;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
 renderProducts(button.dataset.filter);
}));
byId("year").textContent=new Date().getFullYear();
byId("requested-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
renderProducts();saveCart();
