// Add new job list item
document.querySelector(".btn-newJob").addEventListener("click", addNewJob);

function addNewJob() {
  // Create container li element & add class
  const li = document.createElement("li");
  li.className = "job-list-item";

  // Create a element and append to li
  const a = document.createElement("a");
  a.href =
    "https://i.pinimg.com/originals/75/36/56/753656ed86bc354efcf7ca1e261ea1a8.png";
  li.appendChild(a);

  // Create span (company name), add class, textContent & append to a
  const companySpan = document.createElement("span");
  companySpan.className = "job-list-company";
  companySpan.textContent = "Test Company";
  a.appendChild(companySpan);

  // Create span (job title), add class, textContent & append to a
  const jobTitle = document.createElement("h3");
  jobTitle.className = "job-list-title";
  jobTitle.textContent = "Test Job Title";
  a.appendChild(jobTitle);

  // Creat span (job location), add class, textContent & append to a
  const jobLocationSpan = document.createElement("span");
  jobLocationSpan.className = "job-list-location";
  jobLocationSpan.textContent = "Test Location";
  a.appendChild(jobLocationSpan);

  // Append li to parent element ul
  const developmentParent = document.querySelector(".development-list");
  developmentParent.appendChild(li);

  console.log(li);
}
