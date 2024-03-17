const stars = document.querySelectorAll(".fa-star-o");
const rating = document.querySelector(".selected-rating-value");

let currentTotal = -1;
stars.forEach((item, index) => {
  item.dataset.rating = index + 1;
  item.addEventListener("mouseover", handleMouseOver);
  item.addEventListener("click", handleOnClick);
  item.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
  const currentVal = event.target.dataset.rating;
  if (!currentVal) return;
  else {
    handleUpdateRating(currentVal);
  }
}

function handleUpdateRating(currentValue) {
  for (let i = 0; i < 5; i++) {
    if (i < currentValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleMouseLeave() {
  handleUpdateRating(currentTotal);
}
function handleOnClick(event) {
  const currentVal = event.target.dataset.rating;
  currentTotal = currentVal;
  handleUpdateRating(currentTotal);
  rating.textContent = currentTotal;
}
