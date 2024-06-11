const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const modal = document.querySelector("#circuit-content");

function openNav() {
   if (sidebar && content) {
       sidebar.style.width = "150px";
       content.style.marginRight = "150px";
   }
}

function closeNav() {
   if (sidebar && content) {
       sidebar.style.width = "0";
       content.style.marginRight = "0";
   }
}

function openCircuit() {
   if (modal) {
       modal.style.display = "flex";
       document.body.style.overflow = "hidden";
   }
}

function closeCircuit() {
   if (modal) {
       modal.style.display = "none";
       document.body.style.overflow = "auto";
   }
}

