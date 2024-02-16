const allBtn = document.getElementsByClassName("btn");
let titleCount = 1;
let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (event) {
    count++;
    const placeName =
      event.target.parentNode.parentNode.childNodes[1].innerText;
    const price =
      event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedPlaces = document.getElementById("selected-place-container");
    const p = document.createElement("p");
    p.innerText = `${titleCount}. ${placeName}: ${price} $`;
    selectedPlaces.appendChild(p);
    titleCount++;
    totalPrice("total-cost", parseFloat(price));
    grandTotal("grand-total", parseFloat(price));
    serInnerText("cart-count", count);
  });
}

function totalPrice(id, value) {
  const totalCost = parseFloat(document.getElementById(id).innerText);
  const sum = totalCost + parseFloat(value);
  serInnerText("total-cost", sum);
}

function grandTotal(id, value) {
  const totalCost = parseFloat(document.getElementById(id).innerText);
  const sum = totalCost + parseFloat(value);
  serInnerText("grand-total", sum);
}

function serInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
