// UV config

// L bare stealers, we use wisp ;)
//  ⠀⠀⠀       ⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠟⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣳⠖⠳⣄⡀⠀⠀⠀⠀⠀⠀
//  ⠀⠀⠀⠀⡤⠒⠀⠂⡾⠉⠀⠀⠀⠀⠉⢳⡄⣄⡀⠀⠀
//  ⠀⠀⠀⢸⡥⠀⣀⡼⢁⠀⢰⡄⠀⡄⠀⠀⣧⠀⠙⡆⠀
//  ⠀⢀⣠⠼⠗⠚⠉⠠⠋⠀⠀⢷⣠⣧⠀⠀⠈⠳⢤⣇⠀
//  ⠀⣾⣟⠒⠦⣄⠀⠀⠀⣠⡴⠋⠁⢈⠛⢦⣄⣠⣴⣾⣷
//  ⢀⡟⠙⢶⣤⠬⠷⣼⡏⠉⠉⢩⡍⠹⠦⢤⣿⣤⣨⣿⠈
//  ⡾⣡⠆⠁⠀⠀⠀⢠⡀⠀⠀⠀⢱⡀⠀⠂⠙⠎⠻⡅⠀
//  ⢿⠁⠒⣤⠤⣤⣀⠀⢧⠀⠀⠀⣸⠃⠀⠀⠀⡶⣤⣽⠀
//  ⠈⠳⣴⡇⠀⠀⠈⠛⢦⣄⣠⠾⢿⣄⣀⣠⠾⣡⠞⠁⠀
//  ⠀⠀⠈⠉⠉⠉⠁⢧⢠⠟⣽⠀⢿⠀⢧⢰⡈⠀⠀⠀⠀
//  ⠀⠀⠀⠀⠀⠀⠐⢫⠏⢸⠁⠀⠈⢳⠘⢧⣙⢦⠀⠀⠀

self.__uv$config = {
  prefix: "/active/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/uv.handler.js",
  client: "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/uv.client.js",
  bundle: "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/uv.bundle.js",
  config: "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/uv.config.js",
  sw: "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/uv.sw.js",
};
