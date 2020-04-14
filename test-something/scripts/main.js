let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/alt-logo-rev4-06.png') {
      myImage.setAttribute ('src','images/gts-team.png');
    } else {
      myImage.setAttribute ('src','images/alt-logo-rev4-06.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'I love you uwu <3, ' + myName;
  }

  if(!localStorage.getItem('name')) {
     setUserName(); }
     } else {
     let storedName = localStorage.getItem('name');
     myHeading.innerHTML = 'I love you uwu <3, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();


  }