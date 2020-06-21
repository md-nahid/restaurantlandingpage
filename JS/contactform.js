


let form = document.querySelector("form");
form.addEventListener('submit', () => {
    let customername = document.getElementById("name").value;
    let customermail = document.getElementById("email").value;
    let customerdate = document.getElementById("date").value;
    let customernum = document.getElementById("number").value;
    console.log(customername, customermail, customerdate, customernum);
})

