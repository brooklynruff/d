let lastUpdate;
let updatePopup = document.getElementById("updatePopup");
let updateText = document.getElementById("updateText");

let currentUpdate = document.getElementById("currentUpdate");
let currentUpdateText = document.getElementById("currentUpdateText");

async function checkUpdate() {
    let update = await (await fetch("https://raw.githubusercontent.com/brooklynruff/d/refs/heads/main/updater/changelog_highlight.txt", { cache: 'no-store' })).text();

    if (!lastUpdate) {
        lastUpdate = update;
        currentUpdateText.innerText = update;

        currentUpdate.style.visibility
         = "visible";
        document.body.style.scrollBehavior = ""; 
        return;
    }

    if (update != lastUpdate) {
        updateText.innerText = update;

        updatePopup.style.visibility = "visible";
        document.body.style.overflow = "hidden";
    }
    
    lastUpdate = update;
}

async function update() {
    let html = await (await fetch("https://raw.githubusercontent.com/brooklynruff/d/refs/heads/main/updater/index.html", { cache: 'no-store' })).text();
    let win = window.open()
    win.document.write(html);
    win.document.close();
    window.close();
}

async function closePopup() {
    updatePopup.style.visibility = "hidden";
    currentUpdate.style.visibility = "hidden";
    document.body.style.overflow = "";
}

checkUpdate();
setInterval(checkUpdate, 5 * 60000)