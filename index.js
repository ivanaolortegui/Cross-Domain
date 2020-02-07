window.onload = function () {

  var messageEle = document.getElementById('message');

  function receiveMessage(e) {

    if (e.origin !== "http://localhost:4200")
      return;

    messageEle.innerHTML = "Mensaje Resibido " + e.data;
  }
  window.addEventListener('message', receiveMessage);
}