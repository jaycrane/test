// multiply two numbers upon click action
function ask () {
    let a = +prompt("Add in a number");
    let b = +prompt("And times it by this number");
    let final = multiply (a, b);
    alert('The return number is ' + final )
}
function multiply (a, b) {
    return a * b;
}
document.querySelector("a").addEventListener("click", ()=>{
    ask();
});

// swap main image
const imageSwap = document.querySelector("img");
imageSwap.onclick = () => {
    const mySrc = imageSwap.getAttribute("src");
    if (mySrc === "images/whatsapp.png") {
      imageSwap.setAttribute("src", "images/porsche-logo.png");
    } else {
      imageSwap.setAttribute("src", "images/whatsapp.png");
    }
  };

// personalised welcome message
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent  = `Mozilla is cool ${storedName}`;
}

function setUserName () {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
}







