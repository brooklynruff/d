function getTitleLabel() {
    const labels = [
        'No Name Games on top',
        'Now with a better level system',
        'Make sure to use No Name Games!',
        'Did you come from No Name Games? You better have...',
        'Shoutout to Victor! Who\'s Victor?',
    ];

    return labels[Math.floor(Math.random() * labels.length)];
}

function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
    return new Promise((resolve) => script.onload = resolve);
}

async function getValidProxy() {
    let proxies = [
        "https://script.google.com/macros/s/AKfycbxVXu6E3uuGsGE9x3tKLuotRZWNqDHxLkkgAf2KpHw_5k76g2_ZF_35y7ZlxdZh5so2/exec",
        "https://script.google.com/macros/s/AKfycbws-htWRaCHbSWh4SxjMDTqHJhtN1H5pI3umWb5VnbFoJfDsZh9hKVgI3Bc1mpdv45h/exec"
    ]

    for (let i = 0; i < proxies.length; i++) {
        let text = await (await fetch(proxies[i])).text();

        if (text == "ok") {
            return proxies;
        }
    }
}

async function loadGame() {
    const parameters = new URLSearchParams(location.search);
    const getUrlParameter = (key) => parameters.get(key);

    window.HW_SETTINGS = {
        siteURL: './',
        corsProxy: getValidProxy(),
        pathPrefix: '',
        titleLabel: getTitleLabel(),
        titleLabelX: 645,
        titleLabelY: 250,
        titleLabelRotation: 0,
        titleLabelSize: 20,
        titleLabelColor: 0xfdfd65,
        resolutionZoomIncreaseRatio: 0.5,
        tesselation: 'tess2',
        replay_id: getUrlParameter('replay_id'),
        level_id: getUrlParameter('level_id')
    };


    await addScript(`./pixi.js`);
    await addScript(`./dependencies.js`);
    await addScript(`./happywheels.js`);
}

loadGame();
