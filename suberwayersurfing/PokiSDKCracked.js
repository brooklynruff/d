const defaults = new class {
    init = function() {
        return new Promise((r)=>{
            r(true);
        });
    };

    rewardedBreak = function() {
        return new Promise((r)=>{ 
            r(true);
        });
    }
    gameLoadingStart = function() {}
    gameLoadingFinished = function() {}
    gameplayStart = function() {}
    gameplayStop = function() {}
    commercialBreak = function() {
        return new Promise((r)=>{
            r(true);
        }); 
    }

    customEvent = function() {
        console.log('fuck u want me to do :sob:')
    }
};


window.PokiSDK = new Proxy({}, {
    get(target, key, reciever) {
        if (defaults[key]) {
            return defaults[key];
        }

        return ()=>{}
    }
})

window.pokiReady = true;
window.pokiAdBlock = false;