/* =========================
   Sidebar controls
========================= */
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const searchInput = document.getElementById("searchInput");

function openSidebar() {
    if (!sidebar || !overlay) return;

    sidebar.classList.add("active");
    overlay.classList.add("active");
}

function closeSidebar() {
    if (!sidebar || !overlay) return;

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    window.setTimeout(hideSubMenu, 400);
}

if (menuBtn) menuBtn.addEventListener("click", openSidebar);
if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
if (overlay) overlay.addEventListener("click", closeSidebar);

/* Also allow keyboard activation for the icon controls. */
if (menuBtn) {
    menuBtn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openSidebar();
        }
    });
}

if (closeBtn) {
    closeBtn.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            closeSidebar();
        }
    });
}

function openMenuWithCategory(category) {
    openSidebar();
    showSubMenu(category);
}

function showSubMenu(id) {
    const mainMenu = document.getElementById("main-menu-list");
    const targetMenu = document.getElementById(`${id}-submenu`);

    if (mainMenu) mainMenu.style.display = "none";

    document.querySelectorAll(".submenu").forEach((menu) => {
        menu.classList.remove("active");
    });

    if (targetMenu) targetMenu.classList.add("active");
}

function hideSubMenu() {
    const mainMenu = document.getElementById("main-menu-list");
    if (mainMenu) mainMenu.style.display = "block";

    document.querySelectorAll(".submenu").forEach((menu) => {
        menu.classList.remove("active");
    });
}

function showGallery(galleryId) {
    document.querySelectorAll(".submenu").forEach((menu) => {
        menu.classList.remove("active");
    });

    const targetGallery = document.getElementById(galleryId);
    if (targetGallery) targetGallery.classList.add("active");
}

/* =========================
   Product search
========================= */
function executeSearch() {
    const query = searchInput ? searchInput.value.trim() : "";

    if (query) {
        const baseUrl = "https://www.casio.com/in/finder-result/#/?q=";
        window.location.href = baseUrl + encodeURIComponent(query);
    } else {
        alert("Please enter a product name to search!");
        if (searchInput) searchInput.focus();
    }
}

if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") executeSearch();
    });
}

const searchIcon = document.querySelector(".search-icon");
if (searchIcon) {
    searchIcon.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            executeSearch();
        }
    });
}

/* =========================
   Favourite heart buttons
========================= */
const heartButtons = document.querySelectorAll(".heart");
const countHeading = document.querySelector("h1");
let favouriteCount = 0;

heartButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
        const isFavourite = button.innerHTML.trim() === "♡";

        if (isFavourite) {
            button.innerHTML = "❤️";
            button.style.color = "red";
            button.setAttribute("aria-pressed", "true");
            favouriteCount += 1;
        } else {
            button.innerHTML = "♡";
            button.style.color = "black";
            button.setAttribute("aria-pressed", "false");
            favouriteCount -= 1;
        }

        /* Avoid a JavaScript error if the page has no h1 counter. */
        if (countHeading) countHeading.innerText = favouriteCount;
    });
});
