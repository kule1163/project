const menuItems = document.querySelectorAll(".sidebar-container ul li");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});

const tableItems = document.querySelectorAll(".table-container tr");

tableItems.forEach((item) => {
  item.addEventListener("click", () => {
    tableItems.forEach((tableItem) => tableItem.classList.remove("active"));
    item.classList.add("active");
  });
});

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar-container");

sidebarToggle.addEventListener("click", () => {
  sidebarToggle.classList.toggle("active-icon");

  sidebar.classList.toggle("show-sidebar");
});
