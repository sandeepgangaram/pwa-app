var deferredPromt;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((a) => {
    console.log("Service Worker registered!", a);
  });
}

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("before install prompt");
  event.preventDefault();
  deferredPromt = event;
  return false;
});
