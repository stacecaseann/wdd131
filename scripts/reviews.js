function getNumberOfReviews()
{
  let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
  return numReviews;
}

const numReviewsField = document.querySelector("#numReviews");
numReviewsField.innerHTML = `<span class="highlight">Number of Reviews:</span> ${getNumberOfReviews()}`;
