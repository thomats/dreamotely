// Add event listener for filter toggle
document
  .querySelector(".filter-toggle")
  .addEventListener("click", toggleFilters);

//
function toggleFilters() {
  const searchFilters = document.querySelector("#search-filters");
  if (searchFilters.className === "hidden") {
    searchFilters.className = null;
  } else {
    searchFilters.className = "hidden";
  }
}
