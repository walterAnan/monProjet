let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu")

sidebarBtn.onclick = function(){
    sidebar.classList.toggle("active");
}