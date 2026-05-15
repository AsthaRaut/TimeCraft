const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const searchInput = document.getElementById('searchInput');

function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    setTimeout(hideSubMenu, 400); 
}

if(menuBtn) menuBtn.onclick = openSidebar;
if(closeBtn) closeBtn.onclick = closeSidebar;
if(overlay) overlay.onclick = closeSidebar;

function openMenuWithCategory(category) {
    openSidebar();
    showSubMenu(category);
}

function showSubMenu(id) {
    document.getElementById('main-menu-list').style.display = 'none';
    
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(menu => menu.classList.remove('active'));

    const targetMenu = document.getElementById(id + '-submenu');
    if (targetMenu) {
        targetMenu.classList.add('active');
    }
}

function hideSubMenu() {
    document.getElementById('main-menu-list').style.display = 'block';
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(menu => menu.classList.remove('active'));
}

function showGallery() {
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(menu => menu.classList.remove('active'));
    
    const gallery = document.getElementById('photo-gallery');
    if(gallery) gallery.classList.add('active');
}

function executeSearch() {
    const query = searchInput.value.trim();
    
    if (query !== "") {
        const baseUrl = "https://www.casio.com/in/finder-result/#/?q=";
        const finalUrl = baseUrl + encodeURIComponent(query);
        
        window.location.href = finalUrl;
    } else {
        alert("Please enter a product name to search!");
    }
}

if(searchInput) {
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            executeSearch();
        }
    });
}
function showGallery(galleryId) {
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(menu => menu.classList.remove('active'));

    const targetGallery = document.getElementById(galleryId);
    if (targetGallery) {
        targetGallery.classList.add('active');
    }
}




let btns = document.querySelectorAll(".heart");
let p= document.querySelector("h1");



    let count = 0;

    btns.forEach((btn)=>{
    btn.addEventListener("click", () => {
        
        if(btn.innerHTML === "♡"){
            btn.innerHTML = "❤️";
            btn.style.color = "red";
             count ++;
            p.innerText = count;

        }
        else{
            btn.innerHTML = "♡";
            btn.style.color = "black";
            count --;
            p.innerText = count;
        }

    });

})