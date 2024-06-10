function openNav() {
    document.querySelector(".sidebar").style.width = "150px";
   document.querySelector(".content").style.marginRight = "150px";
}

function closeNav() {
   document.querySelector(".sidebar").style.width = "0";
   document.querySelector(".content").style.marginRight = "0";
}

function openCircuit() {
   const modal = document.querySelector("#circuit-content");
   modal.style.display = "block";
   document.body.style.overflow = "hidden"
}

function closeCircuit() {
   const modal = document.querySelector("#circuit-content");
   modal.style.display = "none";
   document.body.style.overflow = "auto"; 
}