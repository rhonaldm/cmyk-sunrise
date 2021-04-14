const loadHtml = function (parentElementId, filePath) {
  const init = {
    method: "GET",
    headers: { "Content-Type": "text/html" },
    mode: "cors",
    cache: "default",
  };
  const req = new Request(filePath, init);
  fetch(req)
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      // Replace `#` char in case the function gets called `querySelector` or jQuery style
      if (parentElementId.startsWith("#")) {
        parentElementId.replace("#", "");
      }
      document.getElementById(parentElementId).innerHTML = body;
    });
};

window.onload = function () {
  const footerWraper = document.getElementById("footer-wraper");

  loadHtml('header','/components/header.html')
  loadHtml('content','/components/products.html')
  footerWraper.innerHTML = "<h1>aquí va el footer</h1>";
};
