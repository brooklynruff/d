window.PokiSDK = new class {
    init = function() {
        return new Promise((r)=>{
            r();
        });
    };

    rewardedBreak = function() {
        return new Promise((r)=>{
            r();
        });
    }
    gameLoadingStart = function() {}
    gameLoadingFinished = function() {}
    gameplayStart = function() {}
    gameplayStop = function() {}
    commercialBreak = function() {
        return new Promise((r)=>{
            r();
        }); 
    }
    rewardedBreak = function() {
        return new Promise((r)=>{
            r();
        }); 
    }

    customEvent = function() {
        console.log('fuck u want me to do :sob:')
    }
};

["setDebug", "gameplayStart", "gameplayStop", "gameLoadingProgress", "happyTime", "setPlayerAge", "togglePlayerAdvertisingConsent", "toggleNonPersonalized", "setConsentString", "logError", "sendHighscore", "setDebugTouchOverlayController", "roundStart", "roundEnd"].forEach((i)=>{
    window.PokiSDK[i] = function(){};
})

window.pokiReady = true;
window.pokiAdBlock = false;