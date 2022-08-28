const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")


function addHome() {
    add(homeScore)
}

function reduceHome() {
    reduce(homeScore)
}

function addGuest() {
    add(guestScore)
}

function reduceGuest() {
    reduce(guestScore)
}

function reset() {
    homeScore.textContent = "0"
    guestScore.textContent = "0"
    adjustIndentation()
    highlightLeader()
}

function highlightLeader() {
    const homeTitle = document.getElementById("home-title")
    const guestTitle = document.getElementById("guest-title")
    if (parseInt(homeScore.textContent) > parseInt(guestScore.textContent) || homeScore.textContent == "AD") {
        homeTitle.classList.add("glow")
        guestTitle.classList.remove("glow")
    } else if (parseInt(homeScore.textContent) < parseInt(guestScore.textContent) || guestScore.textContent == "AD") {
        guestTitle.classList.add("glow")
        homeTitle.classList.remove("glow")
    } else {
        homeTitle.classList.remove("glow")
        guestTitle.classList.remove("glow")
    }
    
}

function add(element) {
    switch (element.textContent) {
        case "0":
            element.textContent = "15"
            break
        case "15":
            element.textContent = "30"
            break
        case "30":
            element.textContent = "40"
            break
        case "40":
            element.textContent = "AD"
            break
    }
    adjustIndentation()
    highlightLeader()
}

function reduce(element) {
    switch (element.textContent) {
        case "AD":
            element.textContent = "40"
            break
        case "40":
            element.textContent = "30"
            break
        case "30":
            element.textContent = "15"
            break
        case "15":
            element.textContent = "0"
            break
    }
    adjustIndentation()
    highlightLeader()
}

function adjustIndentation() {
    let counters = document.getElementsByClassName("counter-number");
    for (counter of counters) {
        if (parseInt(counter.textContent) >= 10 && parseInt(counter.textContent) < 20) {
            counter.classList.add("negative-indent-30")
            counter.classList.remove("negative-indent-10")
        } else if (parseInt(counter.textContent) >= 20 || counter.textContent === "AD") {
            counter.classList.add("negative-indent-10")
            counter.classList.remove("negative-indent-30")
        } else {
            counter.classList.remove("negative-indent-30")
            counter.classList.remove("negative-indent-10")
        }
    }    
}

