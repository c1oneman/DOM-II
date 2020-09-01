// Your code goes here

// 1
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      console.log('Enter Pressed');
        newBackground();
    }
  });
  function newBackground() {
      //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
      var x = Math. floor(Math. random() * 256);
      var y = Math. floor(Math. random() * 256);
      var z = Math. floor(Math. random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      document.body.style.background = bgColor;
  }
// 2
const documentH2 = document.querySelectorAll('h2');

for (const h2 of documentH2) {
    h2.addEventListener('mouseover', function(event) {
        console.log('hovered h2');
        h2.style.fontSize = '4em';
    })
  }
// 3, 4, 5
const documentIMG = document.querySelectorAll('img');

for (const img of documentIMG) {
    img.addEventListener('load', function(event) {
        console.log('loaded img');
        img.style.borderRadius = '25px';
    })
    img.addEventListener('mouseenter', function(event) {
        console.log('mouseenter img');
        img.style.borderRadius = '0px';
    })
    img.addEventListener('mouseleave', function(event) {
        console.log('mouseleave img');
        img.style.borderRadius = '25px';
    })
  }
// 6
const copyright = document.querySelector('footer');
copyright.addEventListener('click', function(event) {
    console.log('clicked footer');
    copyright.style.textDecoration = 'underline';
});
// 7
const buttons = document.querySelectorAll('a');
for (const button of buttons) {
    button.addEventListener('dblclick', function(event) {
        console.log('dbl clicked button');
        alert('calm down');
    })
  }
// 8
document.addEventListener("scroll", function() {
    document.body.style.background = 'white';
});
// 9
document.addEventListener("copy", function(event) {
    const text = document.querySelectorAll('p');

    for (const textp of text) {
        textp.textContent = 'you copied me';
      }
})
// 10 
document.addEventListener("paste", function(event) {
    const text = document.querySelectorAll('p');

    for (const textp of text) {
        textp.textContent = 'you pasted me';
      }
})