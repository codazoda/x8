(function () {
  const port = 12321;

  function createLocalLink() {
    const path = window.location.pathname;
    const url = "http://localhost:" + port + path;

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.bottom = "12px";
    container.style.right = "12px";
    container.style.zIndex = "9999";

    const link = document.createElement("a");
    link.href = url;
    link.textContent = "✏️";
    link.target = "_blank";

    link.style.display = "inline-block";
    link.style.padding = "6px 10px";
    link.style.background = "#111";
    link.style.color = "#fff";
    link.style.fontFamily = "system-ui, sans-serif";
    link.style.fontSize = "12px";
    link.style.textDecoration = "none";
    link.style.borderRadius = "6px";
    link.style.opacity = "0.85";

    container.appendChild(link);
    document.body.appendChild(container);
  }

  function hasOwnerCookie() {
    return document.cookie.split(";").some(function (c) {
      return c.trim() === "owner=1";
    });
  }

  if (hasOwnerCookie()) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", createLocalLink);
    } else {
      createLocalLink();
    }
  }
})();
