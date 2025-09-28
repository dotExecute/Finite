//DOM Elements
const openingDialog = document.querySelector("#welcome-txt");
const form = document.querySelector("form");

window.addEventListener("load", () => {
  openingDialog.showModal();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //stops reload after page submit

  const birthdate = document.querySelector("#birthdate").value; // store DOB after form submission
  console.log(birthdate);
  openingDialog.close();
});
