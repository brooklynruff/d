
if(document.location.href.startsWith("file:")) {
alert("You cannot 'open' this file in your browser, the code doesn't work. Upload this folder to your HTTP(s) server and access it via the internet to launch the stable-download game. This is not a bug, please read the documentation");
}else {
window.addEventListener("load", function(){
const relayId = Math.floor(Math.random() * 3);
window.eaglercraftOpts = {
container: "game_frame", assetsURI: "https://cdn.jsdelivr.net/gh/brooklynruff/d@main/Minecraft/src/15/assets.epk", serverWorkerURI: "https://cdn.jsdelivr.net/gh/brooklynruff/d@main/Minecraft/src/15/worker_bootstrap.js", worldsFolder: "MAIN",
servers: [
{ serverName: "Anarchy", serverAddress: "wss://an3rchy.jesusclapsu.repl.co", hideAddress: true },
	{ serverName: "CreaCraft", serverAddress: "wss://sus.shhnowisnottheti.me", hideAddress: true },
  { serverName: "Asspixel", serverAddress: "wss://web.asspixel.net/CAPixel/", hideAddress: true },
  { serverName: "MessCraft", serverAddress: "wss://mess.eu.org/s1/", hideAddress: true },
  { serverName: "BnogoCraftMC", serverAddress: "wss://play.bnogocarft.games", hideAddress: true },
],
relays: [
	{ addr: "wss://relay.deev.is/", name: "lax1dude relay #1", primary: relayId == 0 },
	{ addr: "wss://relay.lax1dude.net/", name: "lax1dude relay #2", primary: relayId == 1 },
	{ addr: "wss://relay.shhnowisnottheti.me/", name: "ayunami relay #1", primary: relayId == 2 }
],
mainMenu: { splashes: [
"No Name Games On Top", "https://sites.google.com/view/nonamegamez", "This is a no name games classic", "No Name Games > All", "hi script kiddie!"
], eaglerLogo: true }};
(function(){
var q = window.location.search;
if(typeof q === 'string' && q.startsWith("?")) {
	q = new URLSearchParams(q);
	var s = q.get("server");
	if(s) window.minecraftOpts.push(s);
}
})();
main();
});}
