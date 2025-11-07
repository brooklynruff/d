"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "https://script.google.com/macros/s/AKfycbzNwHX17TKMONtBHJ5-NrRIDYOXQBe582gPcP-y3aT2WwOFparGSiBPNTLDl0EU8n53Ew/exec?url=https://cdn.jsdelivr.net/gh/brooklynruff/d@main/_test4/active/uv/sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http://
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
export async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register(stockSW);
}
