const btns             = document.querySelectorAll(".tab-btn");
const about           = document.querySelector(".about");
let tabContent       = document.querySelectorAll(".tabContent");

about.addEventListener("click", function(e) {
    let id = e.target.dataset.id;
    if(id) {
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
       tabContent.forEach(function (tab) {
        tab.classList.remove("active");
       });
        let element = document.getElementById(id);
        element.classList.add("active");
    }
});