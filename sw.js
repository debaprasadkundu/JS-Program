console.log("SW Here");
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("c1").then((r) => {
      r.addAll(["index.html"]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res;
    })
  );
});
