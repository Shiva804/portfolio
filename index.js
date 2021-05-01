function menu() {
    const dropdown = document.getElementById("drop-down");

    if (dropdown.style.display == "none") {
        document.getElementById("drop-down").style.display = "block";
    } else {
        document.getElementById("drop-down").style.display = "none";
    }
}

function resizeHide() {
    if (window.outerWidth > 1000) {
        document.getElementById("drop-down").style.display = "none";
    }
}

function scrollit() {
    document.getElementById("homepage").scrollIntoView(true);
}

function scrollto(e) {
    switch (e) {
        case "home":
            document.getElementById("homepage").scrollIntoView(true);
            break;
        case "services":
            document.getElementById("servicepage").scrollIntoView(true);
            break;
        case "works":
            document.getElementById("workspage").scrollIntoView(true);
            break;
        case "skills":
            document.getElementById("skillspage").scrollIntoView(true);
            break;
    }
}

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 200 && window.pageYOffset < 930) {
        document.getElementById("home").style.color = "red";
        document.getElementById("services").style.color = "black";
        document.getElementById("skills").style.color = "black";
        document.getElementById("works").style.color = "black";
    } else if (window.pageYOffset > 930 && window.pageYOffset < 1440) {
        document.getElementById("services").style.color = "red";
        document.getElementById("home").style.color = "black";
        document.getElementById("skills").style.color = "black";
        document.getElementById("works").style.color = "black";
    } else if (window.pageYOffset > 1440 && window.pageYOffset < 2250) {
        document.getElementById("services").style.color = "black";
        document.getElementById("home").style.color = "black";
        document.getElementById("skills").style.color = "black";
        document.getElementById("works").style.color = "red";
    } else if (window.pageYOffset > 2250) {
        document.getElementById("services").style.color = "black";
        document.getElementById("home").style.color = "black";
        document.getElementById("skills").style.color = "red";
        document.getElementById("works").style.color = "black";
    } else {
        document.getElementById("services").style.color = "black";
        document.getElementById("home").style.color = "black";
        document.getElementById("skills").style.color = "black";
        document.getElementById("works").style.color = "black";
    }
});
