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
    const budgetStr = document.getElementById("budget").innerText;
    const budgetNumber = parseFloat(budgetStr);
    if (budgetNumber - parseFloat(price) < 0) {
      alert("No budget, earn more!!!");
      return;
    }
    event.target.setAttribute("disabled", true);
    document.getElementById("budget").innerText =
      budgetNumber - parseFloat(price);
    selectedPlaces.appendChild(p);
    titleCount++;
    totalPrice("total-cost", parseFloat(price));
    grandTotal("grand-total", parseFloat(price));
    serInnerText("cart-count", count);
  });
}

function totalPrice(id, value) {
  const totalCostStr = document.getElementById(id).innerText;
  const totalCostNumber = parseFloat(totalCostStr);
  const sum = totalCostNumber + parseFloat(value);
  serInnerText("total-cost", sum);
}

function grandTotal(category) {
  const totalCostStr = document.getElementById("total-cost").innerText;
  const totalCostNumber = parseFloat(totalCostStr);
  if (category == "bus") {
    serInnerText("grand-total", totalCostNumber + 100);
  } else if (category == "train") {
    serInnerText("grand-total", totalCostNumber - 200);
  } else if (category == "flight") {
    serInnerText("grand-total", totalCostNumber + 500);
  } else {
    serInnerText("grand-total", totalCostNumber);
  }
}

function serInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
