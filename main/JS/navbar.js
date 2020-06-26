

// onclick open dropdown menu
let opendropdown = document.getElementById("opendropdown");
opendropdown.addEventListener("click", () => {
    let sidebarsection = document.querySelector(".sidebarsection");
    if(sidebarsection.classList.contains("slideOutUp")) {
        sidebarsection.classList.replace("slideOutUp", "slideInDown")
    }else {
        sidebarsection.classList.add("slideOutUp");
    }
});


// onclick at any menu item close dropdown menu
let dropdownmenu = document.querySelectorAll(".dropdownmenu");
dropdownmenu.forEach((item) => {
    item.addEventListener('click', () => {
        let sidebarsection = document.querySelector(".sidebarsection");
        if(sidebarsection.classList.contains("slideInDown")) {
            sidebarsection.classList.replace("slideInDown", "slideOutUp")
        }
    });
});



// onscroll add background at and add scrollmenu class navbar
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        let navbar = document.querySelector(".navbar");
        navbar.classList.add('scrollbarstyle');
        let scrollmenu = document.querySelector(".nav-col-1");
        scrollmenu.classList.add("scrollmenu");
    }else {
        let navbar = document.querySelector(".navbar");
        navbar.classList.remove('scrollbarstyle');
        let scrollmenu = document.querySelector(".nav-col-1");
        scrollmenu.classList.remove("scrollmenu");
    }
});


// active class for big screen navigation bar
let active = document.querySelectorAll(".navlink");
active.forEach( (item) => {
    item.addEventListener("click", () => {
        let current = document.querySelector(".active");
        current.classList.remove("active")
        item.classList.add("active");
    })
})


// mobile navbar active class
let mobilemenu = document.querySelectorAll(".navlink");
mobilemenu.forEach( (item) => {
    item.addEventListener("click", () => {
        let current = document.querySelector(".active");
        current.classList.remove("active");
        item.classList.add("active");
    })
})






