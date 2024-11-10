const currentDate = new Date();
const year = currentDate.getFullYear();

const yearField = document.querySelector("#currentYear");
yearField.textContent = year;

const lastModifiedField = document.querySelector("#lastModified");
lastModifiedField.innerHTML = `<span class="highlight">Last Modification:</span> ${document.lastModified}`;
