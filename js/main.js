let answer = true;
// Function onclick for button search
function buttonSearch() {
  if (answer === true) {
    document.getElementById("search-box").style.transform = "rotateX(0deg)";
    answer = false;
  } else {
    document.getElementById("search-box").style.transform = "rotateX(90deg)";
    answer = true;
  }
}
// Function onclick for button view list
function buttonList() {
  if (answer === true) {
    document.querySelector("nav").style.transform = "translateY(0%)";
    document.querySelector("nav").style.opacity = "1";
    answer = false;
  } else {
    document.querySelector("nav").style.transform = "translateY(-150%)";
    document.querySelector("nav").style.opacity = "0";
    answer = true;
  }
}
// Function onclsk for Button view Your shop
function buttonShop() {
  if (answer === true) {
    document.getElementById("Box-shop").style.transform = "translateX(0%)";
    answer = false;
    console.log(true);
  } else {
    document.getElementById("Box-shop").style.transform = "translateX(120%)";
    answer = true;
    console.log(false);
  }
}
