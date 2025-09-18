let lastUpdate;
let updatePopup = document.getElementById("updatePopup");
let updateText = document.getElementById("updateText");

async function checkUpdate() {
    let update = await (await fetch("https://raw.githubusercontent.com/brooklynruff/d/refs/heads/main/updater/changelog_highlight.txt", { cache: 'no-store' })).text();

    if (!lastUpdate) {
        lastUpdate = update;
        return;
    }

    if (update != lastUpdate) {
        updateText.innerText = update;

        updatePopup.style.visibility = "visible";
        document.body.style.overflow = "hidden";
    }
    
    lastUpdate = update;

    setTimeout(checkUpdate, 1000); // every 5 mins it checks
}

async function update() {
    let html = await (await fetch("https://raw.githubusercontent.com/brooklynruff/d/refs/heads/main/updater/index.html", { cache: 'no-store' })).text();
    window.open().document.write(html);
    window.close();
}

async function closePopup() {
    updatePopup.style.visibility = "hidden";
    document.body.style.overflow = "";
}

checkUpdate();