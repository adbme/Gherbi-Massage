

// Raccourcis pour le boutton F (aller à lakaka)
function subscribe() {
    document.getElementById("subscribe-button").click();
}


for (let i = 0; i < 10; i++) {
    document.addEventListener("keydown", function(event) {
        if (event.code === "KeyF") {
            subscribe();
        }
    });
}

// Raccourcis pour le boutton E (revenir a acceuil/index)
function subscribe2() {
    document.getElementById("subscribe-button2").click();
}


for (let i = 0; i < 10; i++) {
    document.addEventListener("keydown", function(event) {
        if (event.code === "KeyE") {
            subscribe2();
        }
    });
}



