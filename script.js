// JS
const btnAbrir = document.getElementById("btn-abrir");
const menuMobile = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay-menu");
const btnFechar = menuMobile.querySelector(".btn-fechar");

function toggleMobileMenu() {
  const isMenuOpen = menuMobile.classList.toggle("active");
  overlay.classList.toggle("active");
  btnAbrir.setAttribute("aria-expanded", isMenuOpen);
  menuMobile.setAttribute("aria-hidden", !isMenuOpen);

  if (isMenuOpen) {
    menuMobile.querySelector("a").focus();
  } else {
    btnAbrir.focus();
  }
}

btnAbrir.addEventListener("click", toggleMobileMenu);
btnFechar.addEventListener("click", toggleMobileMenu);
overlay.addEventListener("click", toggleMobileMenu);

// Fecha menu ao apertar ESC
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuMobile.classList.contains("active")) {
    toggleMobileMenu();
  }
});

// Fecha menu ao clicar em qualquer link (opcional)
menuMobile.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    if (menuMobile.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
});
