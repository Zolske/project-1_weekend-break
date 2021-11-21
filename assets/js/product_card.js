let action_pack = document.getElementById("action_pack");
let relax_pack = document.getElementById("relax_pack");
let discovery_pack = document.getElementById("discover_pack");

document.getElementById("show_action_card").onclick = function () {
    action_pack.style.display = "block";
    relax_pack.style.display = "none";
    discover_pack.style.display = "none";
}

document.getElementById("show_relax_card").onclick = function () {
    action_pack.style.display = "none";
    relax_pack.style.display = "block";
    discover_pack.style.display = "none";
}

document.getElementById("show_discover_card").onclick = function () {
    action_pack.style.display = "none";
    relax_pack.style.display = "none";
    discover_pack.style.display = "block";
}

// Create a condition that targets viewports at least 37.5em wide
const mediaQuery = window.matchMedia('(min-width: 37.5em)')

function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
        // Then log the following message to the console
        console.log('Media Query Matched!')
        action_pack.style.display = "inline-block";
        action_pack.style.width = "30%";
        relax_pack.style.display = "inline-block";
        relax_pack.style.width = "30%";
        discover_pack.style.display = "inline-block";
    } else {
        action_pack.style.display = "block";
        action_pack.style.width = "95%";
        relax_pack.style.display = "none";
        discover_pack.style.display = "none";
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);