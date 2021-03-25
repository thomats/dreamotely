const jobs = [
  {
    jobTitle: "Director of Partner Development",
    company: "OneVision",
    category: "Sales",
    location: "100% Remote",
    featured: true,
  },
  {
    jobTitle: "Front End Developer",
    company: "Netflix",
    category: "Development",
    location: "100% Remote",
    featured: true,
  },
  {
    jobTitle: "Lead UI/UX Designer",
    company: "Apple",
    category: "Design",
    location: "Europe",
    featured: false,
  },
  {
    jobTitle: "Senior Backend Engineer",
    company: "Google",
    category: "Development",
    location: "North America",
    featured: true,
  },
  {
    jobTitle: "DevOps Engineer",
    company: "Heroku",
    category: "Development",
    location: "100% remote",
    featured: false,
  },
  {
    jobTitle: "Junior React Developer",
    company: "Github",
    category: "Development",
    location: "Asia",
    featured: false,
  },
];

const filters = {
  searchText: "",
};

const renderJobs = function (jobs, filters) {
  const filteredJobs = jobs.filter(function (job) {
    return job.jobTitle
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
  });

  document.querySelector(".latest-jobs-list").innerHTML = "";

  filteredJobs.forEach(function (job) {
    const jobsList = document.querySelector(".latest-jobs-list");

    const li = document.createElement("li");
    li.className = "latest-jobs-item";
    jobsList.appendChild(li);

    const a = document.createElement("a");
    li.appendChild(a);

    const header = document.createElement("h3");
    header.className = "latest-jobs-title";
    header.textContent = job.jobTitle;
    a.appendChild(header);

    const companySpan = document.createElement("span");
    companySpan.className = "job-item-company";
    companySpan.textContent = job.company;
    a.appendChild(companySpan);

    const locationDiv = document.createElement("div");
    locationDiv.className = "job-item-location";
    a.appendChild(locationDiv);

    const typeSpan = document.createElement("span");
    typeSpan.className = "job-list-type";
    typeSpan.textContent = job.location;
    locationDiv.appendChild(typeSpan);

    const locationIcon = document.createElement("i");
    locationIcon.className = "fas fa-map-marker-alt";
    typeSpan.prepend(locationIcon);

    const tagsDiv = document.createElement("div");
    tagsDiv.className = "job-item-tags";
    a.appendChild(tagsDiv);

    const categorySpan = document.createElement("span");
    categorySpan.className = "job-item-category";
    categorySpan.textContent = job.category;
    tagsDiv.appendChild(categorySpan);
  });
};

renderJobs(jobs, filters);

document.querySelector(".search-box").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderJobs(jobs, filters);
});

// Add event listener for filter toggle
document
  .querySelector(".filter-toggle")
  .addEventListener("click", toggleFilters);

// Toggle filters on mobile devices
function toggleFilters() {
  const searchFilters = document.querySelector("#search-filters");
  if (searchFilters.className === "hidden") {
    searchFilters.className = null;
  } else {
    searchFilters.className = "hidden";
  }
}
