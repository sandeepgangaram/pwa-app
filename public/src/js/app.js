if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((a) => {
    console.log("Service Worker registered!", a);
  });
}
