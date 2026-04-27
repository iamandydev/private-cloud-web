/* abrir modal */
function openModal(modal) {
  document.getElementById(modal).classList.remove("hidden");
}

/* cerrar modal */
function closeModal(modal) {
  document.getElementById(modal).classList.add("hidden");
}

/* expandir dropdown */
function expandDropdown(element) {
  trigger = document.getElementById(element);
  dropdown = document.getElementById(element + "Dropdown");

  dropdown.classList.remove("hidden");

  document.addEventListener("click", (e) => {
  if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});
}