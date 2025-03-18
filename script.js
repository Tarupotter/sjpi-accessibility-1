const readMoreLink = document.querySelector("#readMoreLink");
const moreText = document.querySelector("#moreText");

const toggleText = () => {
  const isHidden = moreText.classList.contains("hidden");
  moreText.classList.toggle("hidden", !isHidden);
  readMoreLink.textContent = isHidden ? "Read less" : "Continue reading";
};

readMoreLink.addEventListener("click", toggleText);

