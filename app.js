const job = document.getElementById("jobs").value;
const jobLocation = document.getElementById("location").value;
const searchBtn = document.getElementById("searchBtn");

function findJob() {
    alert(job, jobLocation);
}

const submitBtn = document.getElementById("submit");

function loginForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == null || email == Number || email == "") {
        alert("pls fill in the required info");
        return false;
    }

    if (password.length < 6) {
        alert("pls provide a  password that match");
        return false;
    }
}

searchBtn.addEventListener("click", findJob);
// submitBtn.addEventListener("click", loginForm);
