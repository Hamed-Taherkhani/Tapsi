const servicesText = document.getElementById("services-text");

let previousElement = document.querySelector("#services ul li");

let responseJson = null;
function fetchInformation(element) {
  if (responseJson === null) {
    const xhr = new XMLHttpRequest();
    xhr.onloadend = () => {
      const response = xhr.response;
      responseJson = JSON.parse(response);
    };
    xhr.open("GET", "./sources/services information/services-info.json", false);
    xhr.send();
  }

  controlServicesBlocksOpacity(element);
  let serviceType = element.getAttribute("servicetype");
  putInfoIntoPage(serviceType);
}

function putInfoIntoPage(type) {
  let str = "";
  if (type === "line") str = responseJson.information.line.text;
  if (type === "taxi") str = responseJson.information.taxi.text;
  if (type === "hamkhat") str = responseJson.information.hamkhat.text;
  if (type === "hamyar") str = responseJson.information.hamyar.text;
  if (type === "tell") str = responseJson.information.tell.text;
  if (type === "plus") str = responseJson.information.plus.text;
  if (type === "autopeyk") str = responseJson.information.autopeyk.text;
  if (type === "motopeyk") str = responseJson.information.motopeyk.text;
  if (type === "classic") str = responseJson.information.classic.text;

  servicesText.textContent = str;
}

function controlServicesBlocksOpacity(element) {
  previousElement.classList = " ";
  previousElement.classList.add("unselected");
  element.classList = " ";
  element.classList.add("select");
  previousElement = element;
}
